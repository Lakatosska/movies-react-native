import { FC, PropsWithChildren, createContext, useState, useEffect } from "react";
import { IContext, TypeUserState } from "./auth-provider.interface";
import * as SplashScreen from 'expo-splash-screen';
import { IUser } from "@/shared/types/user.interface";
import { getAccessToken, getUserFromStorage } from "@/services/api/helper.auth";

export const AuthContext = createContext({} as IContext);

SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TypeUserState>(null);
  
  useEffect(() => {
    let isMounted = true

    const checkAccessToken = async () => {

      try {
        // когда загружается приложение 1 раз - когда экран splash-screen
        const accessToken = await getAccessToken()

        if (accessToken) {
          // получаем юзера из нашего AsyncStorage
          const user = await getUserFromStorage() 
          
          // записываем наш экземпляр юзера  
          if (isMounted) setUser(user)
        }
      } catch {
      } finally {
        await SplashScreen.hideAsync()
      }
    }

    let ignore = checkAccessToken() 

    return () => {
      isMounted = false
    }

  }, [])

  return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>
}

export default AuthProvider