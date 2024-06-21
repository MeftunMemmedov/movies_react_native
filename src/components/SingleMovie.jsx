import React from 'react'
import { Image, StyleSheet, Text,TouchableOpacity,View } from 'react-native'

const SingleMovie = ({movie, navigation}) => {
  return (
    <TouchableOpacity style={styles.singleMovie} onPress={()=>navigation.navigate('MovieDetails',{movieName:movie.title})}>
        <View style={styles.singleMoviePosterBox}>
          <Image source={{uri:`${movie.poster}`}} style={styles.singleMoviePoster}/>
        </View>
        <View>
          <Text style={styles.titleText}>{movie.title}</Text>         
        </View>
    </TouchableOpacity>
  )
}

export default SingleMovie


const styles=StyleSheet.create({
    singleMovie:{

        width:100,
        height:140,
        marginRight:5,
   
    },
    singleMoviePosterBox:{
        width:'100%',
        height:'100%'
    },
    singleMoviePoster:{
      width:'100%',
      height:'100%',
      objectFit:'cover'
    },
    titleText:{
      color:'white'
    }
})
