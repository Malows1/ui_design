import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   titlecontainer:{

  height: 110,
   },
 title: {
  top:"55%",
   fontSize: 30,
   color: "#fff",
    textAlign: "center"
 },
 back:{
  top:36,
  left: 10,
  tintColor: "white",
  width: 24,
  height: 20,
 },
 faq:{
  top:12,
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
  top: 10,
  height: 80,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product2:{
  backgroundColor:"#fff",
  top: 20,
  height: 80,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product3:{
  backgroundColor:"#fff",
  top: 30,
  height: 80,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product4:{
  backgroundColor:"#fff",
  top: 40,
  height: 80,
  borderRadius:10,
  width: "95%",
  alignItems: "center"
},
product5:{
  backgroundColor:"#fff",
  top: 50,
  height: 80,
  borderRadius:10,
  width: "95%",
  alignItems: "center"

},
product:{
  width:"90%",
  height: 45,
  top: 15 
 
}


});

export default styles;
