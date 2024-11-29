from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
from lightgbm import LGBMModel
from pandas import DataFrame

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

with open("model.pkl", "rb") as fin:
    pkl_bst: LGBMModel = pickle.load(fin)

gender_to_float = {"Male": 1.00, "Female": 0.00, "Other": 2.00}
ever_married_to_float = {"Yes": 1.00, "No": 0.00}
work_type_to_float = {"Private": 2.00, "GovtJob": 0.00, "Children": 4.00, "NeverWorked": 1.00, "SelfEmployed": 3.00}
smoking_status_to_float = {"FormerlySmoked": 1.00, "NeverSmoked": 2.00, "Smokes": 3.00}
residence_type_to_float = {"Urban": 1.00, "Rural": 0.00}

def request_to_df(req: SubmitFormRequest):
    df = DataFrame({
        "age": req.age,
        "hypertension": 1 if req.hypertension else 0,
        "heart_disease": 1 if req.heartDisease else 0,
        "avg_glucose_level": req.avgGlucoseLevel,
        "gender": gender_to_float[req.gender],
        "ever_married": ever_married_to_float["Yes" if req.everMarried else "No"],
        "work_type": work_type_to_float[req.workType],
        "Residence_type": residence_type_to_float[req.residenceType],
        "bmi": req.bmi,
        "smoking_status": smoking_status_to_float[req.smokingStatus],
    }, index=[0])
    return df


@app.post("/")
def submit_form(request: SubmitFormRequest):
    df = request_to_df(request)
    y_probs = pkl_bst.predict_proba(df)
    print(y_probs)
    return {"strokeConfidence": y_probs[0][1]}