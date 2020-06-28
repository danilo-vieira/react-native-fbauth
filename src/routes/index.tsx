import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const stackRoutes = createStackNavigator();

const Routes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <stackRoutes.Screen name="SignIn" component={SignIn} />
    <stackRoutes.Screen name="Dashboard" component={Dashboard} />
  </stackRoutes.Navigator>
);

export default Routes;
