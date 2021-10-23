import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from './MainNavigator'

const RootStack = createStackNavigator()

const RootNavigator = () => (
    <NavigationContainer>
        <RootStack.Navigator headerMode='none' mode='modal' initialRouteName={'root'}>
            <RootStack.Screen
                name='mainNavigator'
                component={MainNavigator}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    </NavigationContainer>
)

export default RootNavigator
