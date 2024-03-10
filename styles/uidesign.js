import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   titlecontainer:{

  height: 130,
   },
 title: {
  top:"70%",
   fontSize: 30,
   color: "#fff",
    textAlign: "center"
 },
 back:{
  top:60,
  left: 10,
  tintColor: "white",
  width: 24,
  height: 20,
 },
 faq:{
  top:40,
   left: "90%",
  tintColor: "white",
  width: 22,
  height: 22,
 },
 diacoinscontainer:{
 height: 50,
 backgroundColor:"#fff",
 borderBottomWidth: 0.3,
 flexDirection: "row",
 justifyContent: "space-between"
 },
  diamond:{
    color: "#000",
    left: 50,
    padding: 10,
  
    fontSize: 21
  },
  coins:{
    color: "#000",
    right: 60,
    padding: 10,
    fontSize: 21
    
  },
  amount:{
    backgroundColor: "#ebebf5",
    height: "100%",
    alignItems:"center"
  },

  selectedText: {
    borderBottomWidth: 1,
    color:"#5436FA",
    borderBottomColor: "#5436FA",
 // Add underline when selected

},
product1:{
  backgroundColor:"#FFF",
  top: 20,
  height: 90,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product2:{
  backgroundColor:"#fff",
  top: 40,
  height: 90,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product3:{
  backgroundColor:"#fff",
  top: 60,
  height: 90,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product4:{
  backgroundColor:"#fff",
  top: 80,
  height: 90,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product5:{
  backgroundColor:"#fff",
  top: 100,
  height: 90,
  borderRadius:10,
  width: "95%",
  alignItems: "center"

},
product:{
  width:"90%",
  height: 48,
  top: 20
 
}


});

export default styles;
