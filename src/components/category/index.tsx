import { Text, Pressable } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "@/styles/colors"
import { styles } from "./styles"

type Props = {
    name: String;
    icon: keyof typeof MaterialIcons.glyphMap
}

export function Category(props: Props){
    return (
        <Pressable style={styles.container} >
            <MaterialIcons name={props.icon} size={16} color={colors.gray[400]} />
            <Text style={styles.name}>{props.name}</Text>
        </Pressable>
    )
}