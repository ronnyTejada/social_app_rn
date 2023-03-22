import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    avatar:{
        height:50,
        width:50,
        borderRadius:100,

    },
    wrapper:{
        height:60,
        width:60,
        borderRadius:100,
        borderWidth:2,
        borderColor:'blue',
        justifyContent:'center',
        alignItems:'center',
    }
})

const Avatar = ({url,userId,marginR}) => {
    const navigation = useNavigation()

    goingToProfile=()=>{
        navigation.navigate('profile',{userId:userId})
    }

    return ( 
       <TouchableOpacity style={{...styles.wrapper,marginRight:marginR}} onPress={goingToProfile}>
        <Image
         style={styles.avatar}
         source={{uri:url}}
        />
       </TouchableOpacity>
     );
}
 
export default Avatar;