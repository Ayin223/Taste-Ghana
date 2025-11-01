import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import meal from "../../assets/data/meals.json"

const SavedScreen = () => {
  return (
    //<SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>
      <ScrollView>

        
          {meal.map(item => 
            <View key = {item.idCategory} style ={styles.favoriteContainer}>
              <View style ={{flexDirection: "row", alignItems: "center"}}>
                <Image
                source={item.strCategoryThumb}
                contentFit = "cover"
                style ={styles.recipeImage}
                />
                <Text style = {{fontSize:18, fontWeight: "bold"}}>
                  {item.strCategory}
                </Text>
              </View>
            
            <Ionicons name= "heart" size= {24} style={{}}/>
          </View>

          )}
        
        
        
      </ScrollView>
  //</SafeAreaView>    
  )
}

export default SavedScreen

const styles = StyleSheet.create({

  favoriteContainer:{
    width: "95%",
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "lightgray",
    alignSelf: "center",
    borderRadius: 25,
    paddingHorizontal:20
  },

  popularImage:{
    height: 50,
    width:50,
    borderWidth: 1,
    borderRadius:50,
    marginHorizontal: 5,
  },

  recipeImage:{
    height: 80,
    width:80,
    borderWidth: 1,
    borderRadius:100,
    marginVertical: 10,
    //marginLeft: 10,
    marginRight: 20
  },
})