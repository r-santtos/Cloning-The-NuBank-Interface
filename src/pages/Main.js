import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import styles from './styles';

function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.CardHeader}>
                        <MaterialIcons name="attach-money" size={28} color="#666" fontWeight="bold" />
                        <MaterialIcons name="visibility-off" size={28} color="#666" fontWeight="bold" />
                    </View>
                    
                    <View style={styles.CardContent}>
                        <Text style={styles.title}> Saldo disponível</Text>
                        <Text style={styles.description}> R$ 197.611,65</Text>
                    </View>

                    <View style={styles.CardFooter}>
                        <Text style={styles.annotation}> 
                            Transferência de R$ 20,00 recebida de Analita Code.
                        </Text>
                    </View>
                </View>
            </View>

            <Tabs />
        </SafeAreaView>
    );
}

export default Main;