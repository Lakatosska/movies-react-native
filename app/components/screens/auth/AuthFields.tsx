import { Field } from "@/components/ui";
import { validEmail } from "@/shared/regex";
import { IAuthFormData } from "@/shared/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { Text, View } from "react-native";

interface IAuthFields {
  control: Control<IAuthFormData>
  isPassRequired?: boolean
  }

const AuthFields: FC<IAuthFields> = ({control, isPassRequired}) => {
  return (
    <>
      <Field 
        control={control} 
        placeholder="Enter Email"
        name='email' 
        rules={{
          required: 'Email',
          pattern: { 
            value: validEmail,
            message: 'Please enter a valid email'
          }
        }} 
        keyboardType="email-address"
      />

      <Field 
        control={control} 
        placeholder="Enter Password"
        name='password'  
        rules={
          isPassRequired 
            ? {
                required: 'Password',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              }
            : {}
          } 
      />
    </>
  )  
}

export default AuthFields