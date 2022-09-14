// React
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Custom Components
import Lookup from './components/Lookup';

// Styles
import GlobalStyle from './styles/style'

const mainBottomTabNav = createBottomTabNavigator()

export default function App() {
  return (
    <SafeAreaView style={style.appContainer}>
      <NavigationContainer>
        <mainBottomTabNav.Navigator
          screenOptions={{
            tabBarIconStyle: { display: "none" },
            tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' },
            tabBarStyle: { backgroundColor: GlobalStyle.black },
            headerTitle: 'Coinhouse Ethersam',
            tabBarLabelStyle: { fontSize: 18 },
            headerStyle: {
              backgroundColor: GlobalStyle.black,
            },
            headerTitleStyle: {
              color: GlobalStyle.white,
              fontSize: 22
            },
            tabBarActiveTintColor: GlobalStyle.white,
            tabBarInactiveTintColor: GlobalStyle.grey,
          }}>
          <mainBottomTabNav.Screen
            name='Lookup'
            component={Lookup}
          />
          <mainBottomTabNav.Screen
            name='QR Scan'
            component={Lookup}
          />
        </mainBottomTabNav.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaView >
  );
}

const style = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.black
  }
})