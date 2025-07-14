import { Text, View, Image } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { colors } from "@/styles/colors"

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />
            </View>
        </View>
    )
}

