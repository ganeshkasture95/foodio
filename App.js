import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* <Stack.Screen name="About" component={AboutScreen} /> */}
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}


