import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios"
import { ReturnedData } from "@/App"
import { useEffect } from "react"

export const formSchema = z.object({
  gender: z.enum(['Male', 'Female', 'Other']),
  age: z.coerce.number(),
  hypertension: z.enum(['Yes', 'No']),
  heartDisease: z.enum(['Yes', 'No']),
  everMarried: z.enum(['Yes', 'No']),
  workType: z.enum(['Private', 'SelfEmployed', 'GovtJob', 'Children', 'NeverWorked']),
  residenceType: z.enum(['Urban', 'Rural']),
  avgGlucoseLevel: z.coerce.number(),
  bmi: z.coerce.number(),
  smokingStatus: z.enum(['FormerlySmoked', 'NeverSmoked', 'Smokes'])
})

function UserForm(props: { onSubmit: (data: ReturnedData) => void }) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: undefined,
      age: undefined,
      avgGlucoseLevel: undefined,
      bmi: undefined,
      everMarried: undefined,
      heartDisease: undefined,
      hypertension: undefined,
      residenceType: undefined,
      smokingStatus: undefined,
      workType: undefined
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios.post('/', {
      ...values,
      everMarried: values.everMarried === 'Yes',
      heartDisease: values.heartDisease === 'Yes',
      hypertension: values.hypertension === 'Yes',
    }).then(res => {
      props.onSubmit({...res.data, ...values})
    })
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="w-inherit">
        <CardHeader>
          <CardTitle>Am I having a stroke?</CardTitle>
          <CardDescription>Fill this form and find out!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Your age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="avgGlucoseLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Glucose Level (mg/dL)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Your average glucose level" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bmi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>BMI</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Your BMI" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="everMarried"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ever married?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="heartDisease"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heart disease?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hypertension"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hypertension?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="residenceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Residence type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Urban">Urban</SelectItem>
                    <SelectItem value="Rural">Rural</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="SelfEmployed">Self-employed</SelectItem>
                    <SelectItem value="Private">Private</SelectItem>
                    <SelectItem value="GovtJob">Government job</SelectItem>
                    <SelectItem value="Children">Children</SelectItem>
                    <SelectItem value="NeverWorked">Never worked</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="smokingStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Smoking status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Smokes">Smokes</SelectItem>
                    <SelectItem value="FormerlySmoked">Formerly smoked</SelectItem>
                    <SelectItem value="NeverSmoked">Never smoked</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit</Button>
        </CardFooter>
      </Card>
      </form>
    </Form>
    </>
  )
}

export default UserForm