import { Text,Pressable } from "react-native";

export const PrimaryButton = ({message,onPress}) => {
    
    return (
        <Pressable 
            className="px-8 py-2.5 rounded-full 
            tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 text-center
            bg-blueC-100 hover:bg-redC-200 active:bg-redC-200 focus:bg-redC-200 focus:ring-redC-400"
            onPress={onPress}
        >
            <Text className="font-extrabold text-sm text-white-200 uppercase text-center">{message}</Text>
        </Pressable>
    );
}