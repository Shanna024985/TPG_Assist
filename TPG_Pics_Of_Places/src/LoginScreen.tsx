import React from 'react'
import { LoginForm } from "@/components/login-form"

type Props = {
  currentUrl: String
}

const LoginScreen = (props: Props) => {

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-[900px] max-w-sm">
        <LoginForm currentUrl={props.currentUrl}/>
      </div>
    </div>
  )
}

export default LoginScreen