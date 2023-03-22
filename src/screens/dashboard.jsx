import React from "react";
import { View, StyleSheet, Text,FlatList,ScrollView } from "react-native";
import Avatar from "../components/avatar";
import MainCard from "../components/mainCard";
import Message from "../components/Message";
import { BLACK, USERS_MOCK } from "../const";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: BLACK,
    flex: 1,
    width: "100%",
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30,
  },
  title: {
    color: "white",
    fontWeight: 800,
    fontSize: 30,
  },
  otherTitle: {
    color: "white",
    fontWeight: 800,
    fontSize: 20,
    marginTop: 40,
  },
  historySection:{
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:30
  }
});

const Dashboard = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Profile</Text>
      <MainCard
        name={USERS_MOCK[0].name}
        role={USERS_MOCK[0].role}
        city={USERS_MOCK[0].city}
        sex={USERS_MOCK[0].sex}
        avatar={USERS_MOCK[0].img}
        userId={USERS_MOCK[0].id}
      />

      <Text style={styles.otherTitle}>You make know</Text>
      <View style={styles.historySection}>
      <FlatList
        horizontal
        style={{  }}
        data={USERS_MOCK}
        renderItem={({ item }) => <Avatar url={item.img} marginR={40} userId={item.id}/>}
      />
      </View>

      <Text style={styles.otherTitle}>Message</Text>

      <ScrollView>
            <Message/>
            <Message/>
            <Message/>
      </ScrollView>

     
    </View>
  );
};

export default Dashboard;
