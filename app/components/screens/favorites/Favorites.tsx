import { FC } from 'react'
import { useFavorites } from './useFavorites'
import { Layout, Loader } from '@/components/ui'
import { Text } from 'react-native'

const Favorites: FC = () => {
  const {favoriteMovies, isLoading} = useFavorites()

  if (isLoading) return <Loader />

	return (
    <Layout isHasPadding>
      <Text>Favorites</Text>

      {/* MovieCatalog */}
    </Layout>
  )
}

export default Favorites
