import React from "react";
import { RefreshControlBase, StyleSheet, Text, View } from "react-native";

export default function Sandbox(){
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection: "row",
        backgroundColor: "#222",
        justifyContent: "space-around",
        paddingTop: 40,
        alignItems: "flex-end",
        // alignContent: "center",
        // textAlign: "center",
    },
    boxOne: {
        flex:3,
        backgroundColor: "violet",
        padding: 10,
        color: "white",
    },
    boxTwo: {
        flex:1,
        backgroundColor: "pink",
        padding: 20,
        color: "white",
    },
    boxThree: {
        flex:1,
        backgroundColor: "red",
        padding: 30,
        color: "white",
    },
    boxFour: {
        flex:1,
        backgroundColor: "green",
        padding: 40,
        color: "white",
    },
})
