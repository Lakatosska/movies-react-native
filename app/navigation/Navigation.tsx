import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { FC, useEffect, useState } from 'react'

import PrivateNavigator from './PrivateNavigator';
import { useAuth } from '@/hooks/useAuth';
import { BottomMenu } from '@/components/ui';
import { useCheckAuth } from '@/providers/auth/useCheckAuth';

const Navigation: FC = () => {

  const user = useAuth()
  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)

  const navRef = useNavigationContainerRef()

  useEffect(() => {
    setCurrentRoute(navRef.getCurrentRoute()?.name) 

    const listener = navRef?.addListener('state', () =>
      setCurrentRoute(navRef.getCurrentRoute()?.name)
    )

    return () => {
      navRef?.removeListener('state', listener)
    }
  }, [navRef])

  useCheckAuth(currentRoute)

  return (
    <>
      <NavigationContainer ref={navRef}>
        <PrivateNavigator />    
      </NavigationContainer>
      {user && currentRoute && (
        <BottomMenu
          currentRoute={currentRoute}
          nav={navRef.navigate}
        />

      )}
    </>
	)
}

export default Navigation