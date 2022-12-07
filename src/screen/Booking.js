import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Booking = () => {
  const route = useRoute();
  console.log(route);
  return (
    <SafeAreaView style={styles.Main}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <ImageBackground
        source={route.params.RECIPE.Image}
        style={styles.ImageBackground}>
        <View style={styles.IconContainer}>
          <AntDesign name='leftcircleo' size={30} color='#F9F9F9' />
          <Ionicons name='bookmark' size={30} color='#12947C' />
        </View>
        <View style={styles.MainContainer}>
          <Image source={route.params.RECIPE.Coock} style={styles.CoockImg} />
          <View style={styles.TectCont}>
            <Text style={styles.Recipeby}>Recipe by :</Text>
            <Text style={styles.RecipestName} >{route.params.RECIPE.Recipe}</Text>
          </View>
          <TouchableOpacity style={{ paddingRight: 20 }}>
            <AntDesign name='rightsquare' size={35} color='white' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.MainReview}>
        <Text style={styles.RecipeName}>{route.params.RECIPE.RecipeName}</Text>
        <View style={styles.ImgReview}>
          <Image source={route.params.RECIPE.User} style={styles.IMG} />
          <Image source={route.params.RECIPE.User1} style={styles.IMG} />
          <Image source={route.params.RECIPE.User2} style={styles.IMG} />
          <View style={styles.RNO}>
            <Text style={styles.RNo} >{route.params.RECIPE.RNo}</Text>
          </View>
        </View>
      </View>
      <View style={styles.SmallTime}>
        <Text style={styles.Time}>{route.params.RECIPE.Time}</Text>
        <Text style={styles.Review}>{route.params.RECIPE.Review}</Text>
      </View>
      <View style={styles.MiddleContainer}>
        <Text style={styles.Ingridient}>Ingridients</Text>
        <Text> {route.params.RECIPE.item}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage}>
          <Image source={route.params.RECIPE.food} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName}> {route.params.RECIPE.foodName} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage}>
          <Image source={route.params.RECIPE.food1} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName1}> {route.params.RECIPE.foodName1} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram1}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage} >
          <Image source={route.params.RECIPE.food2} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName2}> {route.params.RECIPE.foodName2} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram2}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage}>
          <Image source={route.params.RECIPE.food3} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName3}> {route.params.RECIPE.foodName3} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram3}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage}>
          <Image source={route.params.RECIPE.food4} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName4}> {route.params.RECIPE.foodName4} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram4}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage}>
          <Image source={route.params.RECIPE.food5} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName5}> {route.params.RECIPE.foodName5} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram5}</Text>
      </View>
      <View style={styles.Food}>
        <View style={styles.FoodImage}>
          <Image source={route.params.RECIPE.food6} style={styles.ImgFood} />
        </View>
        <Text style={styles.foodName6}> {route.params.RECIPE.foodName6} </Text>
        <Text style={styles.foodGram}> {route.params.RECIPE.foodGram6}</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Booking

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#fff',
    flex: 1,
  },
  ImageBackground: {
    width: 420,
    height: 330,
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 30
  },

  MainContainer: {
    flexDirection: 'row',
    backgroundColor: '#262727',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 165,
    height: 90,
    alignItems: 'center',
    borderRadius: 10,
  },
  CoockImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
  },
  TectCont: {
    marginRight: 30,
    padding: 5,
  },
  Recipeby: {
    color: '#fff',
    fontSize: 16,
  },
  RecipestName: {
    fontSize: 19,
    color: '#fff',
  },
  RNo: {
    color: '#fff'
  },
  RNO: {
    backgroundColor: '#12947C',
    width: 45,
    height: 45,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 40,
    marginHorizontal: -15
  },
  ImgReview: {
    flexDirection: 'row',
  },
  MainReview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 20,
    alignItems: 'center',
  },
  RecipeName: {
    fontSize: 23,
    width: 180,
    fontWeight: 'bold',
    color: '#202949',
  },
  IMG: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: -5
  },
  SmallTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    paddingVertical: 15,
  },
  Time: {
    fontWeight: '500'
  },
  Review: {
    width: 120,
    textAlign: 'right',
    fontWeight: '600'
  },
  MiddleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  Ingridient: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202949',
  },

  ImgFood: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  foodGram: {
    color: '#202949',
    fontWeight:'500',
    fontSize: 16
  },
  Food: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    padding:5,
  },
  FoodImage: {
    backgroundColor: '#D6D7DA',
    width: 45,
    height: 45,
    alignItems: 'center',
    borderRadius: 10,
  },
  foodName: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight: 55
  },
  foodName1: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight:168,
  },
  foodName2: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight:82,
  },
  foodName3: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight:145,
  },
  foodName4: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight:95,
  },
  foodName5: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight:60,
  },
  foodName6: {
    fontSize: 20,
    color: '#202949',
    fontWeight: 'bold',
    paddingRight:160,
  },
})