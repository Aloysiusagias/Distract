import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  keranjang,
  login,
  menuToko,
  onBoarding,
  profil,
  register,
  registerDaerah,
  riwayatPesanan,
  splash,
  statusPesanan,
  tambahBarang,
  toko,
} from './route';

const App = () => {
  const Stack = createStackNavigator();
  const bottomTab = createBottomTabNavigator();
  const bottomTabs = () => {
    return (
      <bottomTab.Navigator backBehavior={'none'} initialRouteName={'Toko'}>
        <bottomTab.Screen
          name="Toko"
          component={toko}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size * 1.5} />
            ),
          }}
        />
        <bottomTab.Screen
          name="Riwayat Pesanan"
          component={riwayatPesanan}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="receipt-long" color={color} size={size * 1.5} />
            ),
          }}
        />
        <bottomTab.Screen
          name="Profil"
          component={profil}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="person" color={color} size={size * 1.5} />
            ),
          }}
        />
      </bottomTab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={splash} />
        <Stack.Screen name="onBoarding" component={onBoarding} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="registerDaerah" component={registerDaerah} />
        <Stack.Screen name="bottomTabs" component={bottomTabs} />
        <Stack.Screen name="menuToko" component={menuToko} />
        <Stack.Screen name="tambahBarang" component={tambahBarang} />
        <Stack.Screen name="keranjang" component={keranjang} />
        <Stack.Screen name="statusPesanan" component={statusPesanan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
