import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import meal from "../assets/data/meals.json"

const HomeScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1 }}>

          {/* {Search Area} */}
      <View style = {{justifyContent: "center", alignItems: "center"}}>
          <TextInput placeholder = "Search" style= {styles.search} />
      </View>  

      <ScrollView showsHorizontalScrollIndicator = {false}>
        <View style = {styles.headerContainer}>

              
              
                  {/* Legend/ Featured Area */}
              <Image 
                source ={meal.find(t => t.idCategory ==="5")?.strCategoryThumb} 
                style= {styles.featuredImage}
                contentFit ="cover"
              />  
              

              {/* Popular Dish Area */}
            
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator= {false} 
                contentContainerStyle = {{alignItems: "center", justifyContent: "center"}}
                style ={styles.popularSection}
              >

              {meal.map((item) =>
                <View key = {item.idCategory} style ={{alignItems: "center"}}>
                  <Image 
                    source = {item.strCategoryThumb}
                    style= {styles.popularImage}
                    contentFit ="cover"
                  />
                  <Text>
                    {item.strCategory}
                  </Text>
                  
                </View>

              ) }
            </ScrollView>

            {/* Recipes Area */}

          
            <View style ={{flexDirection: "row", justifyContent:"center", alignItems: "center", flexWrap: "wrap", marginTop: 20}}>
              
              {meal.map((item) =>
                <View key = {item.idCategory}  style ={{alignItems: "center"}}>
                  <Image 
                    source = {item.strCategoryThumb}
                    style= {styles.recipeImage}
                    contentFit ="cover"
                  />  
                  <Text>
                        {item.strCategory}
                  </Text>
                  
                </View>
              )}

            </View>
             
              

        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  headerContainer:{
    justifyContent: "center",
    alignItems: "center"
  },

  search:{
    marginTop: 10,
    width: 380,
    borderWidth: 2,
    borderRadius: 50,
  },

  featuredImage:{
    height: 200,
    width: 380,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 50,
    //backgroundColor: "blue",
    marginBottom:10,
  },

  popularImage:{
    height: 50,
    width:50,
    borderWidth: 1,
    borderRadius:50,
    marginHorizontal: 5,
  },

  popularSection:{
    marginTop: 20
  },

  recipeImage:{
    height: 80,
    width:80,
    borderWidth: 1,
    borderRadius:100,
    margin: 10,
  },
})