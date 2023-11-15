import { useEffect } from "react"
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"

export const useScaleOnMount = () => {
  // типа useState, но для анимации
  const scale = useSharedValue(0)

  useEffect(() => {
    // сразу после рендера компонента анимируем scale до 1
    scale.value = withSpring(1)

    return () => {
      // после размонтирования компонента анимируем scale до 0
      scale.value = withSpring(0)
    }
  }, [])

  const styleAnimation = useAnimatedStyle(() => ({
      transform: [
        { 
          scale: scale.value 
        }
      ],
  }))

  return {styleAnimation}
}