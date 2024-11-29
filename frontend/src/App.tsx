import { useState } from 'react'
import './App.css'
import { ModeToggle } from './components/mode-toggle'
import UserForm, { formSchema } from './components/UserForm'
import { ThemeProvider } from "@/components/theme-provider"
import Raport from './components/Raport'
import { z } from 'zod'

function App() {
  const [returnedData, setReturnedData] = useState<ReturnedData | null>(null);

  const submitHandler = (data: ReturnedData) => {
    setReturnedData(data);
  }

  const returnHandler = () => {
    setReturnedData(null);
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className='flex justify-between sticky w-full items-center p-2 top-0 bg-white dark:bg-black shadow-md dark:shadow-none'>
        <span>AmIHavingAStroke.com</span>
        <ModeToggle />
      </header>
      <main className='flex justify-center my-10'>
        {
          returnedData === null ?
          <UserForm onSubmit={submitHandler} /> :
          <Raport data={returnedData} onReturn={returnHandler} />
        }
      </main>
    </ThemeProvider>
  )
}

export default App

export interface ReturnedData extends z.infer<typeof formSchema> {
  strokeConfidence: number;
}
