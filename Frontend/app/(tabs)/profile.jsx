import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'


const ProfileScreen = () => {
  const router  = useRouter()
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
          Welcome, Guest! 👋🏿
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 20 }}>
          Sign up to save your favorite recipe!
        </Text>
        <Pressable 
          onPress={() => router.navigate("signup")}
          style={styles.buttonProfile}
        >
          <Text style={{ fontSize: 20, color: "white"}}>
            Sign Up
          </Text>
        </Pressable>
        <Pressable 
          onPress={() => router.navigate("login")}
          style={styles.buttonProfile}
        >
          <Text style={{ fontSize: 20, color: "white"}}>
            Log In
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

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