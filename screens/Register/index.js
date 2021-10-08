import React from 'react';
import {View, Keyboard} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Form from '../../components/Form';
import {registerFields, registerInitialValues} from './fields';

const Register = () => {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{paddingTop: headerHeight, flex: 1}}>
      <Form
        fields={registerFields}
        initialValues={registerInitialValues}
        btnProps={{
          title: 'Register',
        }}
        onSubmit={value => {
          console.warn(value);
          Keyboard.dismiss();
        }}
      />
    </View>
  );
};

export default Register;
