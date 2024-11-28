from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class SubmitFormRequest(BaseModel):
    everMarried: bool
    heartDisease: bool
    hypertension: bool
    gender: str
    age: int
    avgGlucoseLevel: float
    bmi: float
    residenceType: str
    smokingStatus: str
    workType: str

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
def submit_form(request: SubmitFormRequest):
    print(request)
    return {"stroke": True}