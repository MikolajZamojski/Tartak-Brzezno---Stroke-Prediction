import './App.css'
import { ModeToggle } from './components/mode-toggle'
import UserForm from './components/UserForm'
import { ThemeProvider } from "@/components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <header className='flex justify-between sticky w-full items-center p-2 top-0 bg-white dark:bg-black shadow-md dark:shadow-none'>
        <span>AmIHavingAStroke.com</span>
        <ModeToggle />
      </header>
      <main className='flex justify-center my-10'>
        <UserForm />
      </main>
    </ThemeProvider>
  )
}

export default App
