import React, {useState} from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';
import CheckboxIcon from '../../assets/Icons/check_box.svg';
import CheckboxOutlineIcon from '../../assets/Icons/check_box_outline.svg';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <BorderlessButton
      style={{height: 24, width: 24}}
      onPress={() => {
        setIsChecked(val => !val);
      }}>
      {isChecked ? (
        <CheckboxIcon height={24} width={24} fill="dodgerblue" />
      ) : (
        <CheckboxOutlineIcon height={24} width={24} fill="dodgerblue" />
      )}
    </BorderlessButton>
  );
};

export default Checkbox;
