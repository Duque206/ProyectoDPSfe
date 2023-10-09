import { View } from "react-native"

export const Card = (props) => {

    return (
        <View className="block max-w-sm p-6 rounded-lg bg-grayC-300 mt-4">
            {props.children}
        </View>
    )
}