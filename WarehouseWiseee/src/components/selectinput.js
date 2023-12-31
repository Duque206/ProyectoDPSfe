import React from "react";
import {Picker} from "@react-native-picker/picker";


export const SelectInput = ({ data, DefaultPlaceholder,onValueChange,selectedValue }) => {

    return (
        <Picker
            className="w-full h-12 px-4 mb-4 bg-grayC-500 border-transparent focus:border-grayC-500 focus:ring-grayC-500
           rounded-lg shadow-sm p-2.5 text-gray-200"
           onValueChange={onValueChange}
           selectedValue={selectedValue}
        >
            {DefaultPlaceholder && (
                <Picker.Item
                    label={DefaultPlaceholder}
                    value=""
                />
            )}
            {
                data.map((object, index) => {
                    return (
                        <Picker.Item
                            key={index}
                            label={object.name}
                            value={object.id}
                        />
                    )
                })
            }


            {/* <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>

    )

}