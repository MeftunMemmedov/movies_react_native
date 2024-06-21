import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../redux/movieSlice'
import SingleMovie from '../components/SingleMovie'


const Home = ({navigation}) => {
  const {movies}=useSelector(store=>store.movie)
  const dispatch=useDispatch()

  const topMovies=movies.filter((movie)=>movie.rating>7)
  const crimeMovies=movies.filter((movie)=>movie.genre.includes('Crime'))

  useEffect(()=>{
    dispatch(getAllMovies())
  },[])


  return (
    <View style={styles.homeContainer}>
        
        <View style={styles.topMoviesBox}>
          <Text style={styles.topMoviesText}>Top Movies</Text>
          <ScrollView style={styles.movieCarousel} horizontal>
          {
            topMovies.map((topMovie)=>{
              return  <SingleMovie movie={topMovie} navigation={navigation}/>

            })
          }
          </ScrollView>
        </View>
        
        <View style={styles.topMoviesBox}>
          <Text style={styles.topMoviesText}>Crime Time</Text>
          <ScrollView horizontal>
            {
              crimeMovies.map((crimeMovie)=>{
                return <SingleMovie movie={crimeMovie} navigation={navigation}/>
              })
            }
          </ScrollView>
        </View>
    </View>
  )
}

export default Home

const styles=StyleSheet.create({
  homeContainer:{
    width:'100%',
    height:'100%',
    color:'white',
    backgroundColor:'#3A3A3A'
  },
  movieCarousel:{
    marginTop:5,
  },
  topMoviesBox:{
    height:250,
    marginTop:10
  },
  topMoviesText:{
    fontWeight:'bold',
    color:'white',
    fontSize:25,
    marginBottom:10
  },

})
