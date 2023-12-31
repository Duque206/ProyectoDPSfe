import {Text, TextInput, View} from "react-native";
import React from "react";

export const FormikInput = ({ placeholder, passEntry, label = null, formik, valueName}) => {

    return (
        <View className="mb-4">
            { label == null ? null :
                <Text className="text-white-200 my-2">{ label }</Text>
            }
            <TextInput
                className="w-full h-12 px-4 bg-grayC-500 border-grayC-400 focus:border-grayC-500 focus:ring-grayC-500
                rounded-lg shadow-sm p-2.5 text-gray-200"
                placeholderTextColor="#E0E0E0"
                placeholder={placeholder}
                secureTextEntry={passEntry}
                onChangeText={formik.handleChange(valueName)}
                value={formik.values[valueName]}
            />
            <Text className="text-red-500 capitalize-first">
                { formik.touched[valueName] && formik.errors[valueName] }
            </Text>
        </View>
    );
}