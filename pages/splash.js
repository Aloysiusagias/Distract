import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const splash = () => {

  useEffect(() => {
    const session = async () => {
      const data = await AsyncStorage.getItem('DataUser')
      if(data){
        navigation.navigate('bottomTabs')
      } else {
        navigation.navigate('login')
      }
    };
  
    session();
  });

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo_1.png')}/>
        <Text style={styles.teks}>DISTRACT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E49B5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  teks: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40
  }
});

export default splash;
