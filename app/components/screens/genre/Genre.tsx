import { FC } from 'react'
import { Text, View } from 'react-native'
import { useGenre } from './useGenre'
import { Layout, Loader, MovieCatalog } from '@/components/ui'
import { NotFound } from '@/components/ui'

const Genre: FC = () => {
	const { isLoading, movies, genre } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					movies={movies}
					title={genre.name}
					description={genre.description}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre