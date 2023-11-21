import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'
import Animated from 'react-native-reanimated'

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

const MovieItem: FC = () => {

  const {navigate} = useTypedNavigation()

  const {name} = useTypedRoute()

  const isFavoritePage = name === 'Favorites'

  /*Animations*/

	return (
		<ReanimatedPressable>
			<Text>MovieItem</Text>
		</ReanimatedPressable>
	)
}

export default MovieItem