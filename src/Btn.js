import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Btn({ bgColor, btnLabel,
textColor, Press}) {
    return(
        <TouchableOpacity onPress={Press}
        style={{ backgroundColor: bgColor,borderStyle: 'solid',borderColor: 'black',borderWidth:3,
        borderRadius: 10, alignItems: 'center', width: 313, height: 58}}>
            <Text style={{ color: textColor, fontSize: 30,
            fontWeight: 'bold', paddingTop:4}}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    )
}