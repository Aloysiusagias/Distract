import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';

const Skip = ({...props}) => {
  return <Button title="Skip" color="#000" {...props} />;
};

const onBoarding = () => {
    const navigation = useNavigation();
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      onDone={() => navigation.navigate('register')}
      onSkip={() => navigation.navigate('register')}
      pages={[
        {
          backgroundColor: '#FFF',
          image: <Image source={require('../assets/Ellipse1.png')} />,
          title: 'Belanja di Distract',
          subtitle:
            'Belanja melalui aplikasi tidak antri cocok untuk pembeli yang tidak bisa ke toko',
        },
        {
          backgroundColor: '#FFF',
          image: <Image source={require('../assets/Ellipse1.png')} />,
          title: 'Belanja di Toko',
          subtitle:
            'Belanja melalui aplikasi tidak antri cocok untuk pembeli yang tidak bisa ke toko',
        },
        {
          backgroundColor: '#FFF',
          image: <Image source={require('../assets/Ellipse1.png')} />,
          title: 'Belanja di Endang',
          subtitle:
            'Belanja melalui aplikasi tidak antri cocok untuk pembeli yang tidak bisa ke toko',
        },
      ]}
    />
  );
};

export default onBoarding;
