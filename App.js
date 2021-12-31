import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import DataListDetailPage from "./pages/DataListDetailPage";
import DataListPage from "./pages/DataListPage";
import FlexLayoutPage from "./pages/FlexLayoutPage";
import HomePage from './pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Home">
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //     <Drawer.Screen name="SecondScreen" component={SecondScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: "Danh sách các trang" }} component={HomePage} />
        <Stack.Screen name="FlexLayoutPage" options={{ title: "Flex Layout Page" }} component={FlexLayoutPage} />
        <Stack.Screen name="DataListPage" options={{ title: "Hiển thị danh sách dữ liệu" }} component={DataListPage} />
        <Stack.Screen name="DataListDetailPage" options={{ title: "Chi Tiết" }} component={DataListDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
