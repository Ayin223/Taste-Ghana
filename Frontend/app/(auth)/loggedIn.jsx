import { Image } from 'expo-image'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const loggedIn = () => {
  return (
    <ScrollView style={{}}>
          <View style={{ backgroundColor: "lightblue", height: 200, alignItems: "center", paddingTop: 40 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Profile</Text>
          </View>
    
          <View style={{ position: "absolute", zIndex: 99, margin: 10, alignSelf: "center", top: "140" }}>
            <Image
              source={require("../../assets/images/icon.png")}
              contentFit='cover'
              style={{ height: 100, width: 100, borderWidth: 1, borderRadius: 100 }}
            />
          </View>
    
          <View style={{ alignItems: "center", paddingTop: 100 }}>
            <Text style={{ fontSize: 34, fontWeight: "bold", marginBottom: 10 }}>
              Welcome, User! 👋🏿
            </Text>
            <Text>
              Edite Profile
            </Text>
            <Text>
              Settings
            </Text>
            <Text>
              Help Center
            </Text>
            <Text>
              Log Out
            </Text>
            
          </View>
        </ScrollView>
  )
}

export default loggedIn

const styles = StyleSheet.create({
   buttonProfile: {
    justifyContent: "center", 
    alignItems: "center", 
    width: 150, 
    paddingVertical: 10, 
    backgroundColor: "blue", 
    borderRadius: 5,
    marginVertical: 10,
  },
})