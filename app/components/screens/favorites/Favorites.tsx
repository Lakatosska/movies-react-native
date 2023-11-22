import { FC } from 'react'
import { useFavorites } from './useFavorites'
import { Layout, Loader, MovieCatalog } from '@/components/ui'
import { Text } from 'react-native'

const Favorites: FC = () => {
  const {favoriteMovies, isLoading} = useFavorites()

  if (isLoading) return <Loader />

	return (
    <Layout isHasPadding>
      <MovieCatalog title='Favorites' movies={favoriteMovies} />
    </Layout>
  )
}

export default Favorites
