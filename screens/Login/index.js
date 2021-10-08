import React from 'react';
import {View, Keyboard} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import {fields, loginInitialValues} from './fields';

const Login = ({navigation}) => {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{paddingTop: headerHeight, flex: 1}}>
      <Form
        fields={fields}
        initialValues={loginInitialValues}
        onSubmit={value => {
          console.warn(value);
          Keyboard.dismiss();
        }}
        btnProps={{
          title: 'Login',
        }}
      />
      <Typography style={{textAlign: 'center', marginVertical: 10}}>
        Don't Have Acount? Please{` `}
        <Typography
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{
            color: 'red',
            textDecorationLine: 'underline',
          }}>
          Signup
        </Typography>
      </Typography>
    </View>
  );
};

export default Login;
