
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
  
    <View style={styles.appContainer}>
     <View style ={styles.inputContainer}>
<TextInput style= {styles.TextInput} placeholder="Course Goal" />
<Button title="ADD GOAL" />

     </View>
     <View style={styles.goalsContainer}>
<Text>List Of Goal</Text>

     </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  flex:1,
  paddingTop:50,
  paddingHorizontal:16,

 },
 inputContainer:{
  flex:1,
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   marginBottom:24,
   borderBottomColor:'#cccccc',
   borderBottomWidth:1
 },
 TextInput:{
   width:'70%',
   borderColor:'#cccccc ',
   borderWidth:1,
   marginRight:8,
   padding:10

   
 },
 goalsContainer:{
  flex:5
 }
});
