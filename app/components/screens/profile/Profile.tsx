import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'
import { FC } from 'react'
import { Pressable, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Profile: FC = () => {
  const {setUser} = useAuth()

  // просто logout() чистит токены и AsyncStorage => дописываем then
	return (
  <View>
    
    <Pressable onPress={() => AuthService.logout().then(() => setUser(null))}
    className='opacity-40 items-center flex-row justify-end'
    >
      <AntDesign name={'logout'} size={18} color='white' />
			<Text className='text-white text-lg ml-2'>Logout</Text>
    </Pressable>
  </View>
  )
}

export default Profile
