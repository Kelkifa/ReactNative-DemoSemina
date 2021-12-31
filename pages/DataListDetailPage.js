import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DataListDetailPage({ route }) {
    const { params } = route;

    // alert(JSON.stringify(params));
    return (
        <ScrollView style={styles.constainer}>
            <Image source={{ uri: params.image }}
                resizeMode={'cover'}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.infoName}>{params.name}</Text>
                <Text style={styles.infoCost}>{Intl.NumberFormat().format(params.cost)}đ</Text>
                <Text style={styles.infoUnit}>{params.unit}</Text>
                <Text style={styles.infoDescription}>{params.description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    constainer: {
        backgroundColor: 'white'
    },
    image: {
        height: 220
    },
    info: {

    },
    infoName: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    infoCost: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green'
    },
    infoUnit: {
        textAlign: 'center',
        color: 'rgba(99, 96, 96, 0.584)'
    },
    infoDescription: {
        marginHorizontal: 5,
        marginVertical: 10,
        color: 'gray'
    }
})
