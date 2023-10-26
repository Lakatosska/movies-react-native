import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './app/components/Header';
import Navigation from '@/navigation/Navigation';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        {/* <SafeAreaView>
          <Header />
        </SafeAreaView> */}
        <Navigation />
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}

