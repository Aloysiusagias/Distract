import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => {
  return <Button title="Skip" color="#000" {...props} />;
};

const onBoarding = () => {
  const navigation = useNavigation();
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      onDone={() => navigation.navigate('login')}
      onSkip={() => navigation.navigate('login')}
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
          title: 'Belanja di Distract',
          subtitle:
            'Belanja melalui aplikasi tidak antri cocok untuk pembeli yang tidak bisa ke toko',
        },
      ]}
    />
  );
};

export default onBoarding;
