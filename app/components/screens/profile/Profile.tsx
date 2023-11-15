import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'
import { FC } from 'react'
import { Pressable, View, Text, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { deleteItemAsync, getItemAsync } from 'expo-secure-store'
import { EnumSecureStore, IAuthFormData } from '@/shared/types/auth.interface'
import { useProfile } from './useProfile'
import { useForm } from 'react-hook-form'
import { Button, Heading, Loader, Layout } from '@/components/ui'
import AuthFields from '../auth/AuthFields'
import { useScaleOnMount } from '@/hooks/useScaleOnMount'
import Animated from 'react-native-reanimated'

const Profile: FC = () => {
  const {setUser} = useAuth()
  
  const { handleSubmit, setValue, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

  const {isLoading, onSubmit} = useProfile(setValue)

  const {styleAnimation} = useScaleOnMount()

  // просто logout() чистит токены и AsyncStorage => дописываем then
	return (
  <Layout isHasPadding>
    <Heading title='Profile' />

    {/* Picture - user*/}
    <Animated.View 
      style={styleAnimation}
      className='my-6 items-center justify-center'
    >
      <Image 
        source={require('./avatar-guest.jpg')} 
        className='w-40 h-40 rounded-2xl'
      />
    </Animated.View>

    {isLoading ? (
      <Loader /> 
    ) : (
      <View className='mb-10'>
        <AuthFields control={control} />
        <Button onPress={handleSubmit(onSubmit)} icon={'edit'}>
					Update profile
				</Button>
      </View>
    )}

    <Pressable onPress={() => AuthService.logout().then(() => setUser(null))}
    className='opacity-40 items-center flex-row justify-end'
    >
      <AntDesign name={'logout'} size={18} color='white' />
			<Text className='text-white text-lg ml-2'>Logout</Text>
    </Pressable>

    {/* <Pressable onPress={() => deleteItemAsync(EnumSecureStore.ACCESS_TOKEN)}>
				<Text className='text-white'>Clear accessToken</Text>
			</Pressable>
			<Pressable onPress={() => deleteItemAsync(EnumSecureStore.REFRESH_TOKEN)}>
				<Text className='text-white'>Clear refreshToken</Text>
			</Pressable>
			<Pressable
				onPress={() =>
					getItemAsync(EnumSecureStore.ACCESS_TOKEN).then(data =>
						console.log(data)
					)
				}
			>
				<Text className='text-white'>Show accessToken</Text>
			</Pressable>
			<Pressable
				onPress={() =>
					getItemAsync(EnumSecureStore.REFRESH_TOKEN).then(data =>
						console.log(data)
					)
				}
			>
				<Text className='text-white'>Show refreshToken</Text>
			</Pressable> */}
  </Layout>
  )
}

export default Profile
