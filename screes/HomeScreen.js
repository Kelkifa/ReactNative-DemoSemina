import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }) {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Button onPress={() => navigation.navigate('FlexLayoutPage')} title="Flex Layout" />
            <Button onPress={() => navigation.navigate('DataListPage')} title="Hiển Thị Danh Sách Dữ Liệu" />
        </View>
    );
}

export default HomeScreen;