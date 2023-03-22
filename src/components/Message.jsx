import React from 'react'
import { View,Text, StyleSheet } from 'react-native';
import { BLACK_TWO } from '../const';

const styles=StyleSheet.create({
    wrapper:{
        backgroundColor:BLACK_TWO,
        height:120,
        justifyContent:'center',
        textAlign:'center',
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        marginTop:20

    },
    text:{
        color:'white'
    }
})

const Message = () => {
    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum incidunt magni at alias aut quis vel porro debitis, consectetur deleniti! Iusto laboriosam corporis qui, ipsum distinctio totam culpa iste dolores.</Text>
        </View>
     );
}
 
export default Message;