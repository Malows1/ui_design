import React, { useState } from "react";
import { View, SafeAreaView, Image , Text,TouchableOpacity} from "react-native";
import styles from '../styles/uidesign'
import LinearGradient from 'react-native-linear-gradient';

const Design = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };
  const back = require("../images/back.png")
  const faq = require("../images/faq.png")
  //for product images
  const p1 = require("../images/product1.png")
  const p2 = require("../images/product2.png")
  const p3 = require("../images/product3.png")
  const p4 = require("../images/product4.png")
  const p5= require("../images/product5.png")
 
  return (
    <SafeAreaView>
    <LinearGradient  colors={['#cc6ef8', '#7A6AFE']}
      start={{ x: 0, y: .1}}
      end={{ x: .9, y: .5}}
      style={styles.titlecontainer}>
    <Text style = {styles.title} >Store</Text>
    <Image source={back} style = {styles.back} />
    <Image source={faq} style = {styles.faq} />
    </LinearGradient>
    <View style = {styles.diacoinscontainer}>
    <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'diamonds' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('diamonds')}
      >
        <Text style={[styles.diamond, selectedButton === 'diamonds' && styles.selectedText]}>Diamonds</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'coins' && styles.selectedButton,
        ]}
        onPress={() => handleButtonPress('coins')}
      >
        <Text style={[styles.coins, selectedButton === 'coins' && styles.selectedText]}>Coins</Text>
      </TouchableOpacity>
    </View>
    <View style = {styles.amount}>
      <View style={styles.product1}> 
      <Image source={p1} style = {styles.product} />
      </View>
      <View style={styles.product2}> 
      <Image source={p2} style = {styles.product} />
      </View>
      <View style={styles.product3}> 
      <Image source={p3} style = {styles.product} />
      </View>
      <View style={styles.product4}> 
      <Image source={p4} style = {styles.product} />
      </View>
      <View style={styles.product5}> 
      <Image source={p5} style = {styles.product} />
      </View>
   </View>
    </SafeAreaView>
  );
};

export default Design;
