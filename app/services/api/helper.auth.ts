import { getItemAsync, setItemAsync } from 'expo-secure-store'

export const getAccessToken = async () => {
  const accessToken = await getItemAsync('accessToken')

  return accessToken
}