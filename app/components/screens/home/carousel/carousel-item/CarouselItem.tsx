import { Rating } from "@/components/ui"
import { useTypedNavigation } from "@/hooks/useTypedNavigation"
import { IMovie } from "@/shared/types/movie.interface"
import { getMediaSource } from "@/utils/getMediaSource"
import { FC } from "react"
import { Pressable, Text, View, Image } from "react-native"

const CarouselItem: FC<{ movie: IMovie }> = ({ movie }) => {
	
  const {navigate} = useTypedNavigation()
  
  return (
		<View className='w-48'>
      <Pressable onPress={() => navigate('Movie', {
        slug: movie.slug
      })}>
        <View className='absolute z-1 right-2 top-2'>
          {/* Favorite button */}
        </View>
        <Image 
          style={{
            height: 300,
            resizeMode: 'cover',
            borderWidth: 1,
            borderColor: 'white'
          }}
          className='w-full rounded-xl mb-2.5'
          source={getMediaSource(movie.poster)}
        />
      </Pressable>
      <View className={'items-center'}>

        <Rating rating={movie.rating}/>

        <Pressable onPress={() => navigate('Movie', { slug: movie.slug })}>
          <Text
            className='text-white text-3xl font-semibold opacity-95 mb-2.5'
            numberOfLines={1}
          >
            {movie.title}
          </Text>
        </Pressable>

        {/* Genres */}

      </View>
			<Text>Carousel Item</Text>
		</View>
	)
}

export default CarouselItem