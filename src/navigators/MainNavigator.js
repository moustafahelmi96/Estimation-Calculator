import React, { FC, useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome'


const Stack = createStackNavigator()

const MainNavigator = () => {

    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='welcome' component={Welcome} />
        </Stack.Navigator>
    )
}

export default MainNavigator
