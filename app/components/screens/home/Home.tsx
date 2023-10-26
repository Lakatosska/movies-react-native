import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

const Home: FC = () => {
  const {navigate} = useTypedNavigation()

	return (
		<View className='mt-20'>
      <Text>Home</Text>
      <Pressable 
        onPress={() => navigate('Auth')}>
        <Text style={{ color: 'white'}}>Go to login</Text>
      </Pressable>
		</View>
	)
}

export default Home