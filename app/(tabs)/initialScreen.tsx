import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

export default function initialScreen() {
    const navigation = useNavigation();

    const navigateToServices = () => {
        //@ts-ignore
        navigation.navigate('servicesScreen');
      };
    
      const navigateToLocalization = () => {
        //@ts-ignore
        navigation.navigate('LocalizationScreen');
      };

      return (
        <ScrollView contentContainerStyle={styles.container}>
             <View style={styles.body}>
        
            <TouchableOpacity onPress={navigateToServices}>
                <Image
                source={require('@/assets/images/services-icon.png')}
                style={styles.image}
                />
            </TouchableOpacity>

            <ThemedText type="title" lightColor='black'>Serviços</ThemedText>

            <TouchableOpacity onPress={navigateToServices}>
                <Image
                source={require('@/assets/images/location-icon.png')}
                style={styles.image}
                />
            </TouchableOpacity>
            <ThemedText type="title" lightColor='black'>Localização</ThemedText>

          </View>

        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
   
      },
      header: {
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      image: {
        width: 150,
        height: 150,
      },
      body: {
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
      }
    });