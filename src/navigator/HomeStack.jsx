import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home'
import MovieDetails from '../screens/MovieDetails'

const Stack=createStackNavigator()
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MovieDetails' component={MovieDetails}/>
    </Stack.Navigator>
  )
}

export default HomeStack
