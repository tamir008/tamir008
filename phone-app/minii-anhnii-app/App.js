import { StatusBar } from 'expo-status-bar';
import {StyleSheet,SafeAreaView,Text,View,Image,ScrollView,Pressable,} from 'react-native';
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
   <ScrollView>
        <View style={styles.sidebar}>
          <Text style={styles.text}>Өдрийн Мэнд</Text>
          <Image
            style={styles.images}
            source={require('./assets/witch51.jpg')}
          />
          <Ionicons
            name='notifications-circle-outline'
            style={{ fontSize: 40, color: 'blue', marginTop: 5 }}
          />

          <Image
            style={styles.images}
            source={require('./assets/download.jpg')}
          />
          <StatusBar style='auto' />
        </View>
        <View style={styles.wiev2}>
          <View style={styles.view1}>
            <Text style={styles.text1}>Товч ном</Text>
            <Ionicons
              name='caret-down-outline'
              style={{ fontSize: 40, color: 'white' }}
            />
          </View>
          <View style={styles.view2}>
            <Text style={styles.text2}>Цахим ном</Text>
            <Ionicons
              name='tablet-portrait'
              style={{ fontSize: 30, color: 'white', marginTop: 5 }}
            />
          </View>
          <View style={styles.view3}>
            <Text style={styles.text3}>Аудио ном</Text>
            <Ionicons
              name='caret-forward'
              style={{ fontSize: 40, color: 'white' }}
            />
          </View>
          <View style={styles.view4}>
            <Text style={styles.text4}>Подкаст</Text>
            <Ionicons name='ellipse' style={{ fontSize: 40, color: 'white' }} />
          </View>
        </View>
        <Pressable
          onPress={() => {
            alert('Сайн байна уу???');
          }}
        >
          <View style={styles.hudas}>
            <Text style={styles.htext}>Кики болон Жижитэй хамт</Text>
            <Text style={styles.htext1}>Энэ 7 хоногийн онцлох</Text>
            <Image style={styles.img} source={require('./assets/vivi.jpg')} />
          </View>
        </Pressable>
        {/* <View style={styles.view1}></View>

      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
      <View style={styles.view4}></View> */}
      </ScrollView>
    </SafeAreaView> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 20,
    paddingTop: 40,
  },
  sidebar: {
    flexDirection: 'row',
    gap: 30,
  },
  text: {
    fontSize: 25,
    // fontWeight: 'bold',
    marginTop: 5,
  },
  images: {
    height: 30,
    width: 30,
    marginTop: 10,
    borderRadius: 50,
  },
  wiev2: {
    backgroundColor: 'white',
    padding: 25,
    height: 275,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  view1: {
    backgroundColor: '#40E0D0',
    padding: 20,
    // margin: -20,
    borderRadius: 20,
    width: 140,
    height: 100,
  },
  view2: {
    backgroundColor: '#DE3163',
    padding: 20,
    // margin: -20,
    borderRadius: 20,
    width: 140,
    height: 100,
  },
  view3: {
    backgroundColor: 'orange',
    padding: 20,
    // margin: -20,
    borderRadius: 20,
    width: 140,
    height: 100,
  },
  view4: {
    backgroundColor: '#FF33FC',
    padding: 20,
    // margin: -20,
    // flexDirection: 'row',
    borderRadius: 20,
    width: 140,
    height: 100,
  },
  text1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  text2: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  text3: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  text4: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
  hudas: {
    backgroundColor: 'white',
    padding: 0,
    height: 420,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    overflow: 'hidden',
  },
  htext: {
    fontSize: 16,
    color: 'gray',
    paddingTop: 5,
    paddingLeft: 25,
  },
  htext1: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingLeft: 25,
  },
  img: {
    width: 355,
    height: 270,
    // borderRadius: 20,
  },
});
  
