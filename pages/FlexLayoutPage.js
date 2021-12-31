import { StyleSheet, Text, View } from "react-native";

function FlexLayoutPage(props) {
    return (
        <View style={styles.container}>
            <View style={styles.top}></View>
            <View style={styles.center}></View>
            <View style={styles.bottom}>
                <View style={styles.bottomNth1} />
                <View style={styles.bottomNth2} />
                <View style={styles.bottomNth3} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    top: {
        flex: 1,
        backgroundColor: "orange",
    },
    center: {
        flex: 2,
        backgroundColor: "rgb(252, 189, 73)",
    },
    bottom: {
        flex: 3,
        padding: 10,
        backgroundColor: "rgb(245, 224, 185)",
        flexDirection: 'row',
    },
    bottomNth1: {
        flex: 1,
        backgroundColor: 'orange',
    },
    bottomNth2: {
        flex: 1,
        backgroundColor: 'rgb(252, 189, 73)',
    },
    bottomNth3: {
        flex: 1,
        backgroundColor: 'rgb(243, 209, 145)',
    }

})

export default FlexLayoutPage;