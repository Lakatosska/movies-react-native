import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { FC } from 'react'
import { Image, Pressable, Text, View, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { useMovieItemAnimation } from './useMovieItemAnimation'
import { IMovie } from '@/shared/types/movie.interface'
import FavoriteButton from './favorite-button/FavoriteButton'
import { getMediaSource } from '@/utils/getMediaSource'
import { BlurView } from 'expo-blur'
import Rating from './Rating'

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

interface IMovieItem {
  index: number
  className?: string
  movie: IMovie
}

const MovieItem: FC<IMovieItem> = ({index, movie}) => {

  const {navigate} = useTypedNavigation()
  const {name} = useTypedRoute()

  const isFavoritePage = name === 'Favorites'

  const {styleAnimation} = useMovieItemAnimation(index)

	return (
		<ReanimatedPressable 
      style={styleAnimation}
      onPress={() => 
        navigate('Movie', {
          slug: movie.slug,
        })
      }
      className={'rounded-xl overflow-hidden h-56'}
    >

      {isFavoritePage && (
        <View className='absolute z-1 right-1.5 top-1.5'>
          <FavoriteButton 
            movieId={movie._id}
            isSmall
          />
        </View>
      )}

      <Image
				style={{
					resizeMode: 'cover',
					...StyleSheet.absoluteFillObject
				}}
				source={getMediaSource(movie.poster)}
			/>

      <BlurView
        intensity={25}
				className={
					'absolute w-full bottom-0 left-0 right-0 items-center pt-0.5 px-2'
				}
      >
        <View className='-ml-2 -mb-0.5'>
          <Rating rating={movie.rating} size={16}/>
        </View>

        <Text
					className='text-white text-lg font-semibold mb-1'
					numberOfLines={1}
				>
					{movie.title}
				</Text>
      </BlurView>

		</ReanimatedPressable>
	)
}

export default MovieItem