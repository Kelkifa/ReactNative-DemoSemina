import { FlatList, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { useEffect, useState } from "react";

export default function DataListPage({ navigation }) {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchFoodData = async () => {
            const responseJson = await fetch("https://xamarin-food.herokuapp.com/api/food/json");
            const response = await responseJson.json();
            setData(response);
        }

        fetchFoodData();
    }, [])

    /** Handler Functions  */
    const handleItemPress = (item) => {
        navigation.navigate('DataListDetailPage', item);
        // go to detail
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <DataItem item={item} onPress={() => { handleItemPress(item) }} />}
                keyExtractor={item => item._id}
            />
        </View>
    );
}

function DataItem({ item, onPress }) {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.itemContainer} >
                <Image source={{ uri: item.image }}
                    resizeMode={'cover'}
                    style={styles.image}
                />
                <View>
                    <Text style={styles.itemDetail}>{item.name}</Text>
                    <Text style={[styles.itemDetail, styles.itemDetailCost]}>{Intl.NumberFormat().format(item.cost)} đ</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 0.5,
        borderColor: 'rgba(99, 96, 96, 0.384)',
        backgroundColor: 'white'
    },
    itemDetail: {
        flex: 1
    },
    itemDetailCost: {
        color: 'red'
    },
    image: {
        width: 70,
        height: 50
    }
})
