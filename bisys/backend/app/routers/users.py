# backend/app/routers/users.py
from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, EmailStr
from ..db import get_conn

router = APIRouter()

# ⚠️ Estos nombres son los que espera tu SP pro_gu_RegistrarUsuario
class RegistrarUsuarioIn(BaseModel):
    Nombre: str
    Apellido: str
    TipoDeDocumento: str
    NumeroDeDocumento: str
    CorreoElectronico: EmailStr
    Puesto: str

@router.post("/registrar")
def registrar_usuario(
    payload: RegistrarUsuarioIn,
    usuario_logueado: int = Query(..., description="IdUsuario de quien hace la acción")
):
    """
    Llama a: SET @UsuarioLogueado = <id>
             CALL pro_gu_RegistrarUsuario(Nombre, Apellido, TipoDeDocumento,
                                          NumeroDeDocumento, CorreoElectronico, Puesto)
    """
    try:
        conn = get_conn()
        try:
            cur = conn.cursor(dictionary=True)

            # 1) seteo de variable de sesión usada por los SP
            cur.execute("SET @UsuarioLogueado = %s", (usuario_logueado,))

            # 2) llamada al procedimiento con el orden exacto de parámetros
            cur.callproc(
                "pro_gu_RegistrarUsuario",
                (
                    payload.Nombre,
                    payload.Apellido,
                    payload.TipoDeDocumento,
                    payload.NumeroDeDocumento,
                    payload.CorreoElectronico,
                    payload.Puesto,
                ),
            )

            # 3) si el SP devuelve SELECTs, se leen así (opcional)
            data = []
            for rs in cur.stored_results():
                data.append(rs.fetchall())

            conn.commit()
            return {"ok": True, "msg": "Usuario registrado", "data": data}
        finally:
            cur.close()
            conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
