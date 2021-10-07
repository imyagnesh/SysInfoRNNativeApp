import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const Input = forwardRef(({...rest}, ref) => {
  return <TextInput ref={ref} style={styles.input} {...rest} />;
});

export default Input;
