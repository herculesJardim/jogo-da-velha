import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import X from "./x";
import Bola from "./bola";
import Cronometro from "./cronometro";
import Vez from "./vez";
import Campo from "./Campo";

const Fundo = () => {
    return <LinearGradient
        colors={["rgb(95, 231, 255)", "rgb(10, 76, 161)"]} // Cores do gradiente
        start={{ x: 0, y: 1 }} // Direção inicial (topo/esquerda)
        end={{ x: 3, y: 3 }}   // Direção final (topo/direita → "to right")
        style={styles.container}
    >
        <View style={styles.placar}>
            <X />
            <Text >01</Text>
            <Bola/>
            <Text>01</Text>
        </View>
        <View style={styles.espaco}>
            <Cronometro/>
        </View>
        <View>
            <Vez/>
        </View>
        <View style={styles.espaco}>
            <Campo/>
        </View>
    </LinearGradient>
}
const styles = StyleSheet.create(
    {
        container: {
            width: 180,
            height: 340,
            alignItems: "center",
            padding: 20
        },
        placar: {
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#ffffff",
            width: 155,
            height: 70,
            borderRadius: 10,
        },
        espaco:{
            padding: 20
        }
       

    }
)
export default Fundo;