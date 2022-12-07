import { Button, Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View>
                <ImageBackground source={require('../assets/image/Bg3.jpg')}
                    style={styles.ImageBackground}>
                    <View style={styles.HeadLine}>
                        <Text style={styles.Headtext}>Cooking a Delicious Food Easily</Text>
                    </View>
                    <View style={styles.SecondContainer}>
                        <Text style={styles.SubText}>Discover more than 120000 food recipies in your hands and cooking it easily!.</Text>
                    </View>
                    <TouchableOpacity style={styles.Login}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.LoginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.SingUp}>
                        <Text style={styles.SignUpText}>Sign Up</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    ImageBackground: {
        width: 420,
        height: Dimensions.get('window').height,
    },
    HeadLine: {
        marginTop: 420,
        width: 240,
        marginHorizontal: 35
    },
    Headtext: {
        fontSize: 35,
        color: '#F1F1F1',
        fontWeight: 'bold',
    },
    SecondContainer: {
        marginHorizontal: 35,
        width: 270,
        paddingVertical: 10
    },
    SubText: {
        fontSize: 17,
        color: 'gray',
    },
    Login: {
        borderWidth: 1,
        backgroundColor: '#27AE89',
        marginHorizontal: 35,
        alignItems: "center",
        height: 60,
        borderRadius: 15,
        marginTop: 15,
    },
    LoginText: {
        color: '#fff',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    SingUp: {
        borderWidth: 1,
        marginHorizontal: 35,
        alignItems: "center",
        height: 60,
        borderRadius: 15,
        borderColor: '#27AE89',
        marginVertical: 15,
    },
    SignUpText: {
        color: '#fff',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold'
    }
})
