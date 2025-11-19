import { Image } from 'expo-image'
import { Link, useRouter } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const login = () => {
  const router = useRouter()
  return (
    <ScrollView>
          <View style ={{}}>
            <Image 
              source={require("../../assets/images/icon.png")} 
              contentFit='cover'
              style={{ height: 200,}}
            />
            <Text style = {{alignSelf: "center", fontSize: 26, fontWeight: "bold"}}>
              WELCOME BACK
            </Text>
          </View>
          <View style = {{justifyContent: "center", alignItems: "center"}}>
            {/* <TextInput placeholder='Display Name' style ={styles.search}/> */}
            <TextInput placeholder='Email' style ={styles.search}/>
            <TextInput placeholder='Password' style ={styles.search}/>
            
            <Pressable
              onPress={()=>router.navigate("home")}
              style={[styles.search,{backgroundColor: "lightblue", alignItems: "center", justifyContent: "center", marginVertical: 50,}]}
            >
              <Text style = {{fontSize: 18}}>LOG IN</Text>
            </Pressable>
    
            <Text style = {{fontSize: 18}}>
              Don't have an account? 
              <Link href={"signup"} style ={{color: "blue", fontWeight: "bold"}}> SIGN UP</Link>
            </Text>
          </View>
    
        </ScrollView>
  )
}

export default login

const styles = StyleSheet.create({
   search:{
    marginTop: 10,
    height: 50,
    width: 380,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
})