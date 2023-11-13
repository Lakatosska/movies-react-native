import { useAuth } from "@/hooks/useAuth";
import { AuthService } from "@/services/auth/auth.service";
import { IAuthFormData } from "@/shared/types/auth.interface";
import { useMutation } from "@tanstack/react-query";
import { UseFormReset } from "react-hook-form";
import { useMemo } from "react";

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
  const {setUser} = useAuth()

  const {mutate: loginSync, isLoading: isLoginLoading} = useMutation(['login'], ({
    email, password}: IAuthFormData) => 
      AuthService.main('login', email, password), {
      onSuccess(data) {
        reset()
        setUser(data.user)
      }
    }
  )
  
  const {mutate: registerSync, isLoading: isRegisterLoading} = useMutation(['register'], ({
    email, password}: IAuthFormData) => 
      AuthService.main('reg', email, password), {
      onSuccess(data) {
        reset()
        setUser(data.user)
      }
    })

  // указываем (), т.к. возвращаем объект
  return useMemo(() => 
    ({
      loginSync, 
      registerSync,
      isLoading: isLoginLoading || isRegisterLoading
    }), 
    [isLoginLoading, isRegisterLoading]
  )
}