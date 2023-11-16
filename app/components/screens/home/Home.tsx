import { Layout, Loader } from '@/components/ui'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { TypeRootStackParamList } from '@/navigation/navigation.types'
import { useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useGetAllMovies } from './useGetAllMovies'
import Carousel from './carousel/Carousel'

const Home: FC = () => {
  const {navigate} = useTypedNavigation()

  const { isLoading, movies } = useGetAllMovies()

	return (
		<Layout>
      {isLoading ? <Loader /> : movies?.length && <Carousel movies={movies}/> }
		</Layout>
	)
}

export default Home