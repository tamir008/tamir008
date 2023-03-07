import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
<View>
      <Pressable onPress={()=>{alert('switchImage')}} onLongPress={()=>{alert('onswitchImage')}}>
      <Image style={{height:1050, width:150}} source={require('./assets/favicon.png')}></Image>
      </Pressable> 
      <Pressable onPress={()=>{alert('onpressText')}} onLongPress={()=>{alert('onlongpressText')}}>
      <Text>my first app!</Text>
      </Pressable>
      <Button title='CLICKS' onPress={()=>alert('BUTTON')}/>
      
      <StatusBar style="auto" />
      </View> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
    
  },
});
