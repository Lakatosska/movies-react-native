import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './app/components/Header';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </>
  );
}

