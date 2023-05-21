import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Field from './Field';
import Btn from './Btn';

const loginPage = () => {
    return (
        <View style={{ marginHorizontal: 40, marginVertical: 100}}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.h1}>HI!</Text>
                <Text style={styles.h1}>Welcome Back</Text>
            </View>
            <View style={{marginTop: 62, alignItems: 'center'}}>
                <Field placeholder="Username" />
                <Field placeholder="Password" secureTextEntry={true} />
            </View>
            <View style={{marginTop: 12, width: 121, alignItems: 'flex-start'}}>
                <Text style={{color: '#5B17EA', fontSize: 14}}>Forgot Password?</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 36}}>
                <Btn textColor='#ffffff' bgColor='#5B17EA' btnLabel='Login' Press={() => alert("Logged in")} />
            </View>
            <View style={{alignItems: 'center', marginTop: 16}}>
                <Text style={{fontSize: 24, color: 'black'}}>or</Text>
            </View>
            <View style={{alignItems: 'center', marginTop: 16}}>
                <Btn textColor='black' bgColor='white' btnLabel='Sign Up' Press={() => alert("Sign up page")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    h1: {
        color: 'black',
        fontWeight: 900,
        fontSize: 32,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        lineHeight: 39,
        textAlign: 'center',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        textShadowColor: 'rgba(0,0,0,0.25)'
    },
})

export default loginPage;