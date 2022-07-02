import {useState} from "react";
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import MainList from "./mainList";
import {StatusBar} from "expo-status-bar";

const image = {uri: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
export default function Home({navigation}) {

    const [blouses, setBlouses] = useState([
        {
            id: 1,
            title: 'White&Black Blouse',
            description:"some text here to descripe that awsome blouse",
            image: 'https://images.unsplash.com/photo-1625150986010-cc136519221b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=441&q=80'

        },
        {
            id: 2,
            title: 'White Florie Blouse',
            description:"some text here to descripe that awsome blouse",
            image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
            id: 3,
            title: 'Red Florie Dress',
            description:"some text here to descripe that awsome blouse",
            image: 'https://images.unsplash.com/photo-1614015822183-4f4817eb9867?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=311&q=80'
        }, {
            id: 4,
            title: 'Pink Blouse',
            description:"some text here to describe that awesome blouse",
            image: 'https://images.unsplash.com/flagged/photo-1576577848480-63665b4870a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        },
    ]);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Clothes App</Text>

                <MainList BLOUSES={blouses}/>
                <StatusBar style="auto"/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4086cb',

    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        paddingTop: 30,
        paddingLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left'
    },
});
