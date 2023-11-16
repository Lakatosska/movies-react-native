import { useTypedNavigation } from "@/hooks/useTypedNavigation"
import { IMovie } from "@/shared/types/movie.interface"
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
          source={}
        />
      </Pressable>
			<Text>Carousel Item</Text>
		</View>
	)
}

export default CarouselItem