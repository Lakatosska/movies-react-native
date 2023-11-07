import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { FC, useState } from 'react'

import PrivateNavigator from './PrivateNavigator';
import { useAuth } from '@/hooks/useAuth';
import BottomMenu from '@/components/ui/layout/bottom-menu/BottomMenu';

const Navigation: FC = () => {

  const user = useAuth()
  const [currentRoute, setCurrentRoute] = useState(undefined)

  const navRef = useNavigationContainerRef()

  return (
    <>
      <NavigationContainer>
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