"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from '@tanstack/react-form';
import * as z from "zod";
import { toast } from "sonner"
import { authClient } from './../lib/auth-client';

const formSchema = z.object({
  name: z.string().min(1,"This field is required"),
  password: z.string().min(8,"Minimum length is 8"),
  email: z.email()
});

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const form = useForm({
    defaultValues:{
    name: "",
    email: "",
    password: "",
  },
  validators: {
    onSubmit: formSchema
  },
  onSubmit: async ({value})=> {
    const toastId = toast.loading("Creating user");
    try {
      const {data, error} = await authClient.signUp.email(value);
      console.log(data);
      if(error) { 
        toast.error(error.message, {id: toastId});
        return;
      }

      toast.success("User created Successfully", {id: toastId});
    } catch (error) {
      toast.error("Something went wrong, please try again later.",{id: toastId});
    }
  }
});


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
          id="login-form"
          onSubmit={(e)=>{
            e.preventDefault();
            form.handleSubmit();
          }}
          >
            <FieldGroup>
              <form.Field name="name" children={(field)=>
                {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input 
                      type="text"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e)=>field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors}/>
                      )}
                    </Field>
                  )
                }
                }/>
                <form.Field name="email" children={(field)=>
                {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input 
                      type="email"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e)=>field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors}/>
                      )}
                    </Field>
                  )
                }
                }/>
                <form.Field name="password" children={(field)=>
                {
                  const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input 
                      type="password"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onChange={(e)=>field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors}/>
                      )}
                    </Field>
                  )
                }
                }/>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button form="login-form" type="submit" className="w-full">Register</Button>
        </CardFooter>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
