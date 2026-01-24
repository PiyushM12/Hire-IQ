import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the application</h1>
      <SignedOut>
        <SignInButton mode='modal'/>
      </SignedOut>
     <SignedIn>
      <SignOutButton/>
      <UserButton/>
     </SignedIn>
    </>
  )
}

export default App
