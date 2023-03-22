import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed'
import React from 'react'
import { TouchableOpacity,StyleSheet } from 'react-native';
const styles = {
    btn:{
        position:'absolute',
        top:50,
        left:40
    }
}

const BackBtn = () => {
    const navigation=useNavigation()
    return ( 
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}>
         <Icon name={'arrow-left'} type="font-awesome" color={'white'} />

        </TouchableOpacity>
     );
}
 
export default BackBtn;