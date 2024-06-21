import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Home from '../screens/Home'
import WatchList from '../screens/WatchList'
import AllMovies from '../screens/AllMovies'
import HomeStack from './HomeStack'
import AllMoviesStack from './AllMoviesStack'

const Drawer=createDrawerNavigator()
const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName='HomeStack'>
        <Drawer.Screen name='HomeStack' component={HomeStack}/> 
        <Drawer.Screen name='AllMoviesStack' component={AllMoviesStack}/>
    </Drawer.Navigator>
  )
}

export default DrawerNav
