import os
import mysql.connector
from mysql.connector import pooling
from dotenv import load_dotenv

load_dotenv()

dbconfig = {
    "host": os.getenv("DB_HOST"),
    "port": int(os.getenv("DB_PORT", "3306")),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
}

pool = pooling.MySQLConnectionPool(pool_name="bisys_pool", pool_size=5, **dbconfig)

def get_conn():
    return pool.get_connection()

def query(sql, params=None):
    conn = get_conn()
    try:
        cur = conn.cursor(dictionary=True)
        cur.execute(sql, params or ())
        rows = cur.fetchall()
        conn.commit()
        return rows
    finally:
        cur.close()
        conn.close()

# backend/app/db.py
from .db import get_conn  # si ya tenés pool/get_conn

def call_proc(proc_name: str, in_params: tuple = ()):
    """
    Llama a un procedimiento almacenado.
    Devuelve listas de filas de cada result set (si los hubiera).
    """
    conn = get_conn()
    try:
        cur = conn.cursor(dictionary=True)
        cur.callproc(proc_name, in_params)          # CALL proc(?, ?, ?)
        results = []
        # Si el SP devuelve SELECTs, se leen así:
        for result in cur.stored_results():
            results.append(result.fetchall())
        conn.commit()                               # importante
        return results
    finally:
        cur.close()
        conn.close()
