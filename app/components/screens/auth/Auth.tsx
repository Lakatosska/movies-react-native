import { Button, Loader, DismissKeyboard } from '@/components/ui'
import { IAuthFormData } from '@/shared/types/auth.interface'
import { FC, useState } from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'
import AuthFields from './AuthFields'
import { useAuthMutations } from './useAuthMutations'

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false)

  const {handleSubmit, control, reset} = useForm<IAuthFormData>({
    mode: 'onChange',
  })

  const { isLoading, registerSync, loginSync } = useAuthMutations(reset)

  const onSubmit: SubmitHandler<IAuthFormData> = ({ email, password }) => {
    if(isReg) {
      registerSync({ email, password })
     } else {
      loginSync({ email, password })
     }
  }
  
	return (
    <DismissKeyboard> 
      <View className='mx-2 items-center justify-center h-full'>
        <View className="w-9/12">
          <Text className='text-center text-white text-4xl font-bold mb-2.5'>
            {isReg ? 'Register' : 'Login'}
          </Text>

          {isLoading ? (
            <Loader /> 
          ) : (
            <>
              <AuthFields control={control} isPassRequired />

              <Button icon={'film'} onPress={handleSubmit(onSubmit)} >
                Go to watch
              </Button>

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className='text-white opacity-30 text-right text-base mt-3'>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable> 
            </>
          )}
        </View>
      </View>
    </DismissKeyboard>
	)
}

export default Auth