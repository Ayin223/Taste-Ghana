import { Image } from 'expo-image'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
  return (
    <ScrollView style = {{}}>
      <View style = {{backgroundColor: "lightblue", height: 200, alignItems: "center", paddingTop: 40}}>
        <Text style={{fontSize: 25, fontWeight:"bold"}}>Profile</Text>
      </View>

      <View style= {{position: "absolute", zIndex: 99, margin: 10, alignSelf: "center", top: "140"}}>
        <Image 
          source={require("../assets/images/icon.png")}
          contentFit = 'cover'
          style = {{height: 100, width:100, borderWidth: 1, borderRadius:100}}
        />
      </View>

      <View style = {{alignItems: "center", paddingTop: 100 }}>
        <Text>
          Welcome, Guest!👋🏿
        </Text>
        <Text>
          Sign up to save your favorite recipe!
        </Text>
        <Button title = "Sign Up"/>
        <Button title = "Log In"/>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})