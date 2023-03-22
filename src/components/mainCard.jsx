import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RED } from "../const";
import Avatar from "./avatar";

const styles = StyleSheet.create({
  card: {
    backgroundColor: RED,
    height: 180,
    borderRadius: 20,
    width: "100%",
    paddingLeft: 30,
    paddingTop: 30,
    flexDirection: "row",
    marginTop:30
  },
  textSection: {
    marginLeft: 30,
  },
  name: {
    color: "white",
    fontWeight: 800,
  },
  role: {
    color: "white",
    marginTop: 15,
  },
  sectionTwo: {
    flexDirection:"row",
    justifyContent:'space-between',
    marginTop:20
  },

  wrapper: {
    backgroundColor:'#814F72',
    width:60,
    marginRight:10,
    alignItems:'center',
    paddingBottom:10,
    borderRadius:5
  },
});

const MainCard = ({ avatar, name, role, sex, city ,userId}) => {
  return (
    <View style={styles.card}>
      <Avatar url={avatar} userId={userId} />
      <View style={styles.textSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>

        <View style={styles.sectionTwo}>
          <View style={styles.wrapper}>
            <Text style={styles.role}>{sex}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.role}>{city}</Text>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.role}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCard;
