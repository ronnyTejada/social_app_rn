import { Icon } from "@rneui/themed";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BLACK_TWO } from "../const";


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: BLACK_TWO,
    height: 200,
    width: 150,
    borderRadius: 10,
    alignItems:'center',
    flexDirection:'column',
    paddingTop:20,
    marginRight:10,
    marginLeft:10,
    marginTop:20
  },
  title:{
    color:'white',
    fontWeight:500,
    marginTop:20,
    marginBottom:5,
    fontSize:30

  },
  subTitle:{
    color:'white',
  }
});

const ProfileBox = ({ iconName, title, subtitle,color }) => {
  return (
    <View style={styles.wrapper}>
      <Icon name={iconName} type="font-awesome" color={color} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
};

export default ProfileBox;
