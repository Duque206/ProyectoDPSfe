import { Text, StyleSheet, View } from "react-native";

export function Categoria() {
    return (
    <View style={styles.container}>
        <Text>Categoria</Text>
    </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent:"center",
    },
});