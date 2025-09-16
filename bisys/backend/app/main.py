from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users

app = FastAPI(title="BISYS API")

# Permitir tu front de Vite (puerto 5173 por defecto)
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     # 👈 abre a todos los orígenes solo para probar
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(users.router, prefix="/api/users", tags=["users"])