from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users

app = FastAPI(title="BISYS API")

# Permitir tu front de Vite (puerto 5173 por defecto)
origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    print("Hola")
    return {"status": "ok"}

app.include_router(users.router, prefix="/api/users", tags=["users"])
