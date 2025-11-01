import { Image } from 'expo-image'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const signup = () => {
  return (
    <ScrollView>
      <View style ={{}}>
        <Image 
          source={require("../../assets/images/icon.png")} 
          contentFit='cover'
          style={{ height: 200,}}
        />
        <Text style = {{alignSelf: "center", fontSize: 36, fontWeight: "bold"}}>
          Create Account
        </Text>
      </View>
      <View>
        <TextInput placeholder='First Name' style ={styles.search}/>
        <TextInput placeholder='Last Name' style ={styles.search}/>
        <TextInput placeholder='Email' style ={styles.search}/>
        <TextInput placeholder='Password' style ={styles.search}/>
      </View>

    </ScrollView>
  )
}

export default signup

const styles = StyleSheet.create({
    search:{
    marginTop: 10,
    width: 380,
    borderWidth: 1,
    borderRadius: 10,
  },
})