import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../redux/movieSlice'
import SingleMovie from '../components/SingleMovie'

const AllMovies = ({navigation}) => {
    const {movies}=useSelector(store=>store.movie)
    const dispatch=useDispatch()
    
    useEffect(()=>{
        dispatch(getAllMovies())
    },[])
  return (

        <ScrollView style={{backgroundColor:'#3A3A3A'}}>
            <View style={styles.allMoviesContainer}>
                {
                    movies.map((movie)=>{
                        return (
                            <View style={{width:'33.3%', height:200, marginBottom:10, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                                <SingleMovie movie={movie} navigation={navigation}/>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>

  )
}

export default AllMovies


const styles=StyleSheet.create({
    allMoviesContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'flex-start',
        width:'96%',
        margin:'auto'
    }
})