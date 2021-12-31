import { Text, View } from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SecondScreen(props) {
    return (
        <View><Text>Second screen</Text></View>
    );
}

export default SecondScreen;