# Tartak-Brzezno---Stroke-Prediction

## Opis
Aplikacja pozwalająca na zdiagnozowanie potencjalnego udaru mózgu na podstawie danych przesłanych przez użytkownika.
Klasyfikacja opiera się na modelu uczenia maszynowego [LightGBM](https://lightgbm.readthedocs.io/en/stable/) trenowanego na [zbiorze](https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset), obudowanego w aplikację webową stworzoną w [React](https://react.dev/) oraz backend w [FastAPI](https://fastapi.tiangolo.com/).

## Wymagania
Instalacja [Node.js](https://nodejs.org/en) (sprawdzona w v20.12.2) i [Python](https://www.python.org/) (sprawdzona w v3.13) 

## Setup frontendu
```
cd frontend
npm i
npm run dev
```
http://localhost:5173/ (może różnić się w zależności od dostępnych portów)

## Setup backendu
```
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
fastapi dev main.py
```
