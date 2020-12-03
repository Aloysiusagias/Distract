import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const splash = () => {
    const navigation = useNavigation();
    setTimeout(() => {navigation.navigate('onBoarding')}, 3000)
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
