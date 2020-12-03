import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {splash, onBoarding, register} from './route';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={splash} />
        <Stack.Screen name='onBoarding' component={onBoarding}/>
        <Stack.Screen name='register' component={register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
