import { ReturnedData } from "@/App";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect } from "react";

function Raport({data, onReturn} : {data: ReturnedData, onReturn: () => void}) {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center space-y-1.5">
        <p className="text-2xl font-semibold leading-none tracking-tight">
          You are in a group of { data.strokeConfidence >= 0.6 ? <span className="text-red-600">high</span> : (data.strokeConfidence >= 0.3 ? <span className="text-orange-500">medium</span> : <span className="text-green-500">low</span>)} risk
        </p>
        <p className="text-sm text-muted-foreground">Please look below for more information</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-4">
        <Card className={"w-full shadow-md " + (data.gender === 'Male' ? "shadow-red-600" : (data.gender === 'Other' ? "shadow-orange-500" : "shadow-green-500"))}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">👩</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Gender</p>
                <p className="mt-2">Men are <span className="font-bold">8.43% more</span> susceptible to strokes than women.</p>
                <p className="mt-2">Your gender is: <span className={"font-bold " + (data.gender === 'Male' ? "text-red-600" : (data.gender === 'Other' ? "text-orange-500" : "text-green-500"))}>{data.gender}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.age >= 71 ? "shadow-red-600" : (data.age >= 1 && data.age <= 46 ? "shadow-green-500" : "shadow-orange-500"))}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">👴</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Age</p>
                <p className="mt-2">People aged <span className="font-bold">1 to 46</span> at the lowest risk of stroke.</p>
                <p className="mt-2">Your age: <span className={"font-bold " + (data.age >= 71 ? "text-red-600" : (data.age >= 1 && data.age <= 46 ? "text-green-500" : "text-orange-500"))}>{data.age}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.avgGlucoseLevel > 130 ? "shadow-red-600" : (data.avgGlucoseLevel >= 71 && data.avgGlucoseLevel < 101 ? "shadow-green-500" : "shadow-orange-500"))}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">🍬</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Average Glucose Level</p>
                <p className="mt-2">Average Glucose Level should be <span className="font-bold">between 71 and 101 mg/dL</span>.</p>
                <p className="mt-2">Your Average Glucose Level: <span className={"font-bold " + (data.avgGlucoseLevel > 130 ? "text-red-600" : (data.avgGlucoseLevel >= 71 && data.avgGlucoseLevel < 101 ? "text-green-500" : "text-orange-500"))}>{data.avgGlucoseLevel}</span> mg/dL</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.bmi < 10 || data.bmi > 25 ? "shadow-red-600" : (data.bmi >= 16 && data.bmi <= 22  ? "shadow-green-500" : "shadow-orange-500"))}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">📏</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">BMI</p>
                <p className="mt-2">Perfect BMI to reduce stroke risk is between <span className="font-bold">16 and 22</span>.</p>
                <p className="mt-2">Your BMI: <span className={"font-bold " + (data.bmi < 10 || data.bmi > 25 ? "text-red-600" : (data.bmi >= 16 && data.bmi <= 22  ? "text-green-500" : "text-orange-500"))}>{data.bmi}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.everMarried === 'Yes' ? "shadow-red-600" : "shadow-green-500")}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">💍</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Ever married?</p>
                <p className="mt-2">Single men/women are <span className="font-bold">6 times less</span> likely to experience stroke.</p>
                <p className="mt-2">You - Ever married?: <span className={"font-bold " + (data.everMarried === 'Yes' ? "text-red-600" : "text-green-500")}>{data.everMarried}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.heartDisease === 'Yes' ? "shadow-red-600" : "shadow-green-500")}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">💔</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Heart disease?</p>
                <p className="mt-2">People with heart disease are <span className="font-bold">4 times more</span> likely to have a stroke.</p>
                <p className="mt-2">You - Heart disease?: <span className={"font-bold " + (data.heartDisease === 'Yes' ? "text-red-600" : "text-green-500")}>{data.heartDisease}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.hypertension === 'Yes' ? "shadow-red-600" : "shadow-green-500")}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">💥</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Hypertension?</p>
                <p className="mt-2">People with hypertension are also <span className="font-bold">4 times more</span> likely to have a stroke.</p>
                <p className="mt-2">You - Hypertension?: <span className={"font-bold " + (data.hypertension === 'Yes' ? "text-red-600" : "text-green-500")}>{data.hypertension}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.residenceType === 'Urban' ? "shadow-red-600" : "shadow-green-500")}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">🏠</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Residence type</p>
                <p className="mt-2">Urban residents are <span className="font-bold">14.65% more</span> likely to experience a stroke than rural residents</p>
                <p className="mt-2">Your residence type: <span className={"font-bold " + (data.residenceType === 'Urban' ? "text-red-600" : "text-green-500")}>{data.residenceType}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.workType === 'Children' || data.workType === 'NeverWorked' ? "shadow-green-500" : (data.workType === 'SelfEmployed' ? "shadow-red-600" : "shadow-orange-500"))}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">👨‍💼</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Work type</p>
                <p className="mt-2"><span className="bold">Self-employed</span> people are at mosk risk, followed by private and government workers.</p>
                <p className="mt-2">Your work type: <span className={"font-bold " + (data.workType === 'Children' || data.workType === 'NeverWorked' ? "text-green-500" : (data.workType === 'SelfEmployed' ? "text-red-600" : "text-orange-500"))}>{data.workType}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className={"w-full shadow-md " + (data.smokingStatus === 'NeverSmoked' ? "shadow-green-500" : "shadow-red-600")}>
          <CardContent className="pt-6">
            <div className="flex gap-4 items-center">
              <span className="text-3xl w-[20%]">🚬</span>
              <div className="w-full flex flex-col items-center">
                <p className="text-lg font-bold">Smoking status</p>
                <p className="mt-2">Non-smokers are at almost <span className="font-bold">twice less</span> risk of stroke.</p>
                <p className="mt-2">Your smoking status: <span className={"font-bold " + (data.smokingStatus === 'NeverSmoked' ? "text-green-500" : "text-red-600")}>{data.smokingStatus}</span></p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Button onClick={onReturn} className="w-fit">Back to form</Button>
    </div>
  )
}

export default Raport;