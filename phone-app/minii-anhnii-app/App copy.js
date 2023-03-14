import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.view1}>

      <Text style={styles.text1}>Өдрийн мэнд</Text>
    
    </View>

  )
}

const styles = StyleSheet.create({
view1: {flex: 1, alignItems: 'center', justifyContent:"center"
},
text1:{fontSize:30}
})