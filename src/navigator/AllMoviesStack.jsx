import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import AllMovies from '../screens/AllMovies'
import MovieDetails from '../screens/MovieDetails'

const Stack=createStackNavigator()
const AllMoviesStack = () => {
  return (
    <Stack.Navigator initialRouteName='AllMovies'>
        <Stack.Screen name='AllMovies' component={AllMovies}/>
        <Stack.Screen name='MovieDetails' component={MovieDetails}/>
    </Stack.Navigator>
  )
}

export default AllMoviesStack
