import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const Input = ({...rest}) => {
  return <TextInput style={styles.input} {...rest} />;
};

export default Input;
