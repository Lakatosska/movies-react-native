import { IMovie } from "@/shared/types/movie.interface"
import { FC, useRef } from "react"
import { Animated, FlatList, Platform, Text, View } from "react-native"
import CarouselItem from "./carousel-item/CarouselItem"
import { ITEM_SIZE } from "./carousel.constants"

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {

  const scrollX = useRef(new Animated.Value(0)).current

	return (
		<View>
      <Animated.FlatList 
        data={movies} 
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        scrollEventThrottle={16}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='center'
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        onScroll={Animated.event(
          [
            { nativeEvent: { contentOffset: { x: scrollX } } }
          ],
          { useNativeDriver: true }
        )}
        renderItem={({ item: movie, index }) => (
          <CarouselItem   
            movie={movie} 
            key={movie._id} 
            index={index}
            scrollX={scrollX}
          />
        )}
      />
		</View>
	)
}

export default Carousel