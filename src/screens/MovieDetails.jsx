import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieByName } from '../redux/movieSlice'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/FontAwesome'


const MovieDetails = ({route}) => {
  const {movie}=useSelector(store=>store.movie)
  const dispatch=useDispatch()
  const {movieName}=route.params
  const currentMovie=movie[0]
 
  useEffect(()=>{
    dispatch(getMovieByName(movieName.toString()))
  },[])
  return (
    <ScrollView>
      <View style={styles.movieDetailsContainer}>
        <ImageBackground source={{uri:`${currentMovie?.poster_bg}`}} resizeMode='cover' style={styles.movieDetailsBgPoster}/>
        <View style={styles.movieInfosContainer}>
          <LinearGradient colors={['transparent','#3A3A3A','#3A3A3A','#3A3A3A']} style={{height:'100%'}}>
          <View style={styles.movieInfos}>
            <View style={styles.movieInfoBoxLeft}> 
                <View style={styles.posterBox}>
                  <Image 
                  source={{uri:`${currentMovie?.poster}`}} 
                  style={{
                    width:'100%',
                    height:'100%', 
                    objectFit:'cover'
                    }}/>
                </View>
            </View>

            <View style={styles.movieInfoBoxRight}>
                <View style={{ height:120}}>
                  <Text style={{color:'white', fontWeight:'bold', fontSize:20, marginBottom:10}}>{currentMovie?.title}</Text>
                  
                  <View>
                    <Text style={{color:'white'}}>{currentMovie?.year}</Text>
                  </View>

                  <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                    <Icons name='imdb' color={'gold'} size={30}/>
                    <Text style={{color:'white', marginLeft:5}}>{currentMovie?.rating}</Text>
                  </View>

                </View>
            </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View style={{borderWidth:1, height:200, backgroundColor:'#3A3A3A'}}>

      </View>
    </ScrollView>
  )
}

export default MovieDetails

const styles=StyleSheet.create({
  movieDetailsContainer:{
    height:300,

    flex:1,
    position:'relative'
  },
  movieDetailsBgPoster:{
    flex: 1,
  },
  movieInfosContainer:{
    position:'absolute',
    bottom:0,
    zIndex:100,

    width:'100%',
    height:200,


  },
  movieInfos:{
    width:'100%',
    flex:1,
    flexDirection:'row'
  },
  movieInfoBoxLeft:{
    width:'50%',

  },
  posterBox:{

    width:150,
    height:200,
    margin:'auto'
  },
  movieInfoBoxRight:{
    width:'50%',
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end'
  }
})