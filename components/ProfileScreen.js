import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import HomeScreen from './HomeScreen';
import TattooScreen from './TattooScreen';
import InfoScreen from './Info';
import Map from './LocationMap';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';



function ProfileScreen () {
// Initialize Firebase hvis ikke allerede initialiseret
    const auth = getAuth();
    const user = auth.currentUser
    const handleLogOut = async () => {
        await signOut(auth).then(() => {
          }).catch((error) => {
          });
    };

    //Hvis der af en eller anden grund ikke skulle være muligt at fremfinde den aktive bruger,
    //skal der udprintes en besked om dette igennem en tekstkomponent
    if (!auth.currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    //Hvis brugeren er logget ind, skal der udprintes en tekstkomponent med brugerens email
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Tattoo" component= {TattooScreen} />
          <Tab.Screen name="Home" component= {HomeScreen} />
          <Tab.Screen name="Map" component= {Map} />
          <Tab.Screen name="Info" component= {InfoScreen} />

        </Tab.Navigator>
      </NavigationContainer>
    );

}

//Lokal styling til brug i komponenten
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

export default ProfileScreen