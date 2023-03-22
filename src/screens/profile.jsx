import { useRoute } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet,Text } from 'react-native';
import Avatar from '../components/avatar';
import BackBtn from '../components/backBtn';
import ProfileBox from '../components/profileBox';
import { BLACK, USERS_MOCK } from '../const';


const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'column',
        backgroundColor:BLACK,
        alignItems:'center',
        paddingTop:100
    },
    name:{
        color:'white',
        fontWeight:800,
        marginTop:20,
        fontSize:20
    },
    role:{
        color:'lightblue',
        marginTop:10,
    },
    boxWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:100
    },
    btn:{
        backgroundColor:'#E7457F',
        width:'80%',
        borderRadius:50,
        height:50,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    textBtn:{
        color:'white'
    }
})

const Profile = () => {
    const route = useRoute()
    const {userId} = route.params
    let user = USERS_MOCK.filter(user=>user.id===userId)



    return ( 
        <View style={styles.wrapper}>
            <BackBtn/>
            <Avatar url={user[0].img}/>
            <Text style={styles.name}>{user[0].name}</Text>
            <Text style={styles.role}>{user[0].role}</Text>

            <View style={styles.boxWrapper}>
            <ProfileBox iconName={'user'} color={'#00aced'} title={user[0].followers} subtitle={'Followers'}/>
            <ProfileBox iconName={'star'} color={'#ed00d5'} title={user[0].collections} subtitle={'Collections'}/>
            <ProfileBox iconName={'heart'} color={'#ed0024'} title={user[0].likes} subtitle={'Likes'}/>
            <ProfileBox iconName={'inbox'} color={'#8200ed'} title={user[0].messages} subtitle={'Messages'}/>
            </View>


            <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Add to friends</Text>
            </TouchableOpacity>
        </View>
     );
}
 
export default Profile;