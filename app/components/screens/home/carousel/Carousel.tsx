import { IMovie } from "@/shared/types/movie.interface"
import { FC, useRef } from "react"
import { Animated, FlatList, Text, View } from "react-native"
import CarouselItem from "./carousel-item/CarouselItem"

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {

  const scrollX = useRef(new Animated.Value(0)).current

	return (
		<View>
      <FlatList data={movies} renderItem={
        ({ item: movie, index }) => (
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