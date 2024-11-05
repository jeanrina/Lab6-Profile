import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import 'react-native-gesture-handler';
import Welcome from './content/Welcome';
import SignUp from './content/SignUp';
import SignIn from './content/SignIn';
import Profile from './content/Profile';
import Settings from './content/Settings';
import ManageUser from './content/ManageUser';
import Logout from './content/Logout';
import ForgotPassword from './content/ForgotPassword';


const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Welcome">
        
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ManageUser" component={ManageUser} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

  