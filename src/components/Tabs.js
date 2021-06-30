import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Tabs() {
    return (
        <View styles={styles.container}>
            <ScrollView 
                contentContainerStyle={ styles.tabsContainer }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.tabItem}>
                    <MaterialIcons name="person-add" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Inicar Amigo</Text>
                </View>

                <View style={styles.tabItem}>
                    <MaterialIcons name="chat-bubble-outline" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>

                <View style={styles.tabItem}>
                    <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Depositar</Text>
                </View>

                <View style={styles.tabItem}>
                    <MaterialIcons name="arrow-upward" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Traansferir</Text>
                </View>

                <View style={styles.tabItem}>
                    <MaterialIcons name="lock" size={24} color="#FFF" />
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabsContainer: {
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 20,
    },
    tabItem: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderRadius: 3,
        marginLeft: 10,
        padding: 10,
        justifyContent: 'space-between',
    },
    tabText: {
        color: '#fff',
        fontSize: 13,
    },
});

export default Tabs;