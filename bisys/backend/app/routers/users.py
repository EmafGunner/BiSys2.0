# backend/app/routers/users.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..db import call_proc  # la utilidad de arriba

router = APIRouter()

class RegistrarUsuarioIn(BaseModel):
    Nombre: str         # @UsuarioLogueado
    Apellido: str
    TipoDeDocumento: str
    NumeroDeDocumento: str
    CorreoElectronico: str
    Puesto: str

@router.post("/registrar")
def registrar_usuario(payload: RegistrarUsuarioIn):
    try:
        # Si tu SP usa variables de sesión (ej: SET @UsuarioLogueado),
        # podés setearla y luego llamar al SP, todo en la misma conexión:
        from ..db import get_conn
        conn = get_conn()
        try:
            cur = conn.cursor(dictionary=True)
            cur.execute("SET @UsuarioLogueado = %s", (payload.usuario_logueado,))
            # Llamada al SP (ajusta el nombre/orden de parámetros a tu SP real)
            cur.callproc(
                "pro_gu_RegistrarUsuario",
                (
                    payload.nombre,
                    payload.apellido,
                    payload.tipo_documento,
                    payload.numero_documento,
                    payload.correo,
                    payload.puesto,
                ),
            )
            # Si el SP hace SELECTs, podés leerlos:
            data = []
            for rs in cur.stored_results():
                data.append(rs.fetchall())
            conn.commit()
            return {"ok": True, "data": data}
        finally:
            cur.close()
            conn.close()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
