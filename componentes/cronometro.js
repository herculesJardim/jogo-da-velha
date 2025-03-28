import { View, StyleSheet, Text } from "react-native";
const Cronometro=()=>{
    return <View style={slyles.container}>
        <Text>0:05</Text>
    </View>
}
const slyles= StyleSheet.create({
    container:{
        width: 40,
        height: 20,
        backgroundColor:"#ffffff",
        fontSize:20,
        alignItems:"center",
        borderRadius: 20
    }
})
export default Cronometro;