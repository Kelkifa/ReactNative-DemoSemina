import { Button, Text, View } from 'react-native';

import HomeScreen from "../screes/HomeScreen";
import React from 'react';
import SecondScreen from "../screes/SecondScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function HomePage({ navigation }) {
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="SecondScreen" component={SecondScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>

    );
}

function CustomDrawerContent({ navigation }) {
    return (
        <Button
            title="Go somewhere"
            onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate('FlexLayoutPage');
            }}
        />
    );
}
