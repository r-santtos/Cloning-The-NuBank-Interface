import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {View, Text, StyleSheet, Image} from 'react-native';

import logo from '../assets/Nubank_Logo.png'

function Header() {
    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <Image source={logo} />
            <Text style={styles.useName}>Ricardo</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#fff" fontWeight="bold" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 5,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    useName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

export default Header;