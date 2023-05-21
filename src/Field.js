import React from 'react';
import {TextInput} from 'react-native';

const Field = props => {
    return(
        <TextInput
            {...props} 
            style={{borderStyle: 'solid',borderColor: 'black',borderWidth:3,
            borderRadius: 10, color: 'black', paddingHorizontal: 10, 
            width: 313, height: 58, backgroundColor: '#ffffff', marginVertical: 10,
            fontSize: 24, lineHeight: 29}}
            placeholderTextColor={'#373737'}>
        </TextInput>
    );
};

export default Field;