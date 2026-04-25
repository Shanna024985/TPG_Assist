import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRef } from "react"
import { useNavigate } from "react-router"
type Props = {
  currentUrl: String
} &  React.ComponentProps<"div">
export function LoginForm({
  className,
  currentUrl,
  ...props
}: Props ) {
  let emailRef: null | any = useRef(null)
  let passwordRef: null | any = useRef(null)
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="loginForm" onSubmit={(e)=>{
            e.preventDefault();
            console.log("hello")
            let body = {
              email: emailRef.current.value,
              password: passwordRef.current.value
            }
            fetch(currentUrl + "/auth/login",{
              body: JSON.stringify(body)
            }).then((value)=>{
              return value.json();
            }).then((value)=>{
              localStorage.setItem("token",value.token)
              useNavigate("/dashboard")
            })
          }}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  ref={emailRef}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" ref={passwordRef} required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/signup">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

