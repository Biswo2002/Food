import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Recipe = [
  {
    id:'R_1',
    Name: 'Spaghettti with Shrimp sauce',
    Pasta:'Pasta',
    Image:require('../assets/image/T6.jpg'),
    Title:'30 Mins | 1 Serving',
  },
  {
    id:'R_2',
    Name: 'Zeera Rice With Dal & Chiken',
    Pasta:'Plane',
    Image:require('../assets/image/T4.jpg'),
    Title:'40 Mins | 5 Serving',
  },
  {
    id:'R_3',
    Name: 'Chiken Fry with Chiken Pakoda ',
    Pasta:'Pasta',
    Image:require('../assets/image/T2.jpg'),
    Title:'20 Mins | 10 Serving',
  },
  {
    id:'R_4',
    Name: 'Spaghettti with Shrimp sauce',
    Pasta:'Pasta',
    Image:require('../assets/image/T1.jpg'),
    Title:'30 Mins | 1 Serving',
  },
  {
    id:'R_5',
    Name: 'Zeera Rice With Dal & Chiken',
    Pasta:'Plane',
    Image:require('../assets/image/T3.jpg'),
    Title:'40 Mins | 5 Serving',
  },
  {
    id:'R_6s',
    Name: 'Chiken Fry with Chiken Pakoda ',
    Pasta:'Pasta',
    Image:require('../assets/image/T5.jpg'),
    Title:'20 Mins | 10 Serving',
  }
]
const Home = () => {
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.FirstContainer}>
        <View style={styles.HeaderText}>
          <Text style={styles.Hello}>Hello Luis,</Text>
          <Text style={styles.today}>What you want to cook today</Text>
        </View>
        <Image source={require('../assets/image/U1.jpg')}
          style={styles.Image}
        />
      </View>
      <View style={styles.SearchContainer}>
        <AntDesign name='search1' size={20} color='#A3A7BC' style={styles.Icon} />
        <TextInput placeholder='Search Recipes' style={styles.Input}
          placeholderTextColor='gray' />
      </View>
      <View style={styles.RecipesContainer}>
        <Image source={require('../assets/image/R1.png')}
          style={styles.Img2} />
        <View style={styles.TextContainer}>
          <Text style={styles.recipes}>You have 12  recipes that</Text>
          <Text style={styles.recipes}>you haven't tried yrt</Text>
          <TouchableOpacity>
            <Text style={styles.Recipes}>See Recipes</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.RecipesText}>
        <Text style={styles.Rtext}>Trending Recipes</Text>
      </View>
      <View style={styles.SecondContainer}>
        <FlatList
        data={Recipe}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({item}) =>(
        <ImageBackground
          source={item?.Image}
          style={styles.ImageBackground}
          imageStyle={{ borderRadius: 15 }} >
          <View style={styles.PastaContainer}>
            <Text style={styles.Pasta}>{item?.Pasta}</Text>
          </View>
          <View style={styles.Name}>
            <View style={styles.RecipeName}>
              <Text style={styles.Spaghettti}> {item?.Name} </Text>
              <Ionicons name='bookmark' size={20} color='#12947C' />
            </View>
              <Text  style={styles.TimeContainer}> {item?.Title} </Text>
          </View>
        </ImageBackground>
   ) }
        />
      </View>
      <View style={styles.ButtomText}>
        <Text style={styles.Categories}>Categories</Text>
        <TouchableOpacity>
        <Text style={styles.ViewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
        <Entypo name='home' size={30} color={'#509a8f'}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <EvilIcons name="search" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo name="bookmark" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Feather name='settings' size={30}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#ffff',
    flex: 1,
  },
  FirstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 25,
  },
  Image: {
    width: 60,
    height: 60,
  },
  Hello: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#13947C',
    paddingVertical: 5,
  },
  today: {
    fontSize: 19,
    fontWeight: '500',
    color: '#9DA2B7',
  },
  SearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F7FC',
    marginHorizontal: 25,
    marginVertical: 25,
    borderRadius: 10,
  },
  Input: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  Icon: {
    paddingLeft: 15,
  },
  RecipesContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    backgroundColor: '#EDF8F1',
    padding: 20,
    borderRadius: 10,
  },
  Img2: {
    width: 80,
    height: 80,
    transform: [
      {
        rotate: '-40deg',
      }
    ]
  },
  TextContainer: {
    paddingLeft: 20,
  },
  recipes: {
    fontSize: 16,
    fontWeight: '500',
    fontWeight: 'bold',
    // color:""
  },
  Recipes: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#43AA96',
    fontWeight: 'bold',
    paddingTop: 10,
  },
  RecipesText: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  Rtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#59617D',
  },
  SecondContainer: {
    marginHorizontal: 15,
  },
  ImageBackground: {
    width: 230,
    height: 320,
    marginHorizontal:10
  },
  PastaContainer: {
    backgroundColor: '#6A6A70',
    width: 80,
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 15,
  },
  Pasta: {
    fontSize: 16,
    padding: 3,
    color: '#fff',
    fontWeight: 'bold',
  },
  Name: {
    backgroundColor: '#262827',
    borderRadius:10,
    marginTop: 160,
    marginHorizontal: 10,
    height:105,
  },
  RecipeName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:10,
  },
  TimeContainer: {
    paddingTop: 20,
    marginHorizontal:10,
    color:'#fff',
  },
  Spaghettti: {
    fontSize: 18,
    width: 160,
    color: '#fff',
    fontWeight:'bold',
    paddingTop:10,
  },
  ButtomText:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:25,
    marginVertical:20,
  },
  Categories:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000',
  },
  icons:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:20,
  }
})