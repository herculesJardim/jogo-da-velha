import { View, StyleSheet, Text } from "react-native";
const Vez=()=>{
    return <View tyle={slyles.container}>
        <Text style={slyles.texto}> Vez: Jogador 1</Text>
    </View>
}
const slyles= StyleSheet.create({
    container:{
        width: 155,
        height: 70,
        alignItems:"center",
        borderRadius: 20,
    },
    texto:{
        fontSize:15,
        fontWeight: "bold",
        color:"#ffffff"
    }
})
export default Vez;