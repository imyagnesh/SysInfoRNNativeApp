import React from 'react';
import {
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  View,
  Text,
  Pressable,
} from 'react-native';
import commonStyles from './commonStyles';
import FastImage from 'react-native-fast-image';
import Typography from './components/Typography';
import Input from './components/Input';
import {RectButton} from 'react-native-gesture-handler';
import Checkbox from './components/Checkbox';

// Layout

const App = () => {
  return (
    <SafeAreaView style={[commonStyles.flex]}>
      <FastImage
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          priority: FastImage.priority.high,
        }}
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          alignSelf: 'center',
          marginVertical: 10,
        }}
        resizeMode="cover"
      />
      <View style={{flex: 1}}>
        <Typography
          variant="h1"
          style={{marginVertical: 20, textAlign: 'center'}}>
          Login
        </Typography>
        <Input placeholder="Username" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: 10,
          }}>
          <Checkbox />
          <Text style={{paddingLeft: 8}}>Remember Me?</Text>
        </View>

        <RectButton
          style={{
            height: 40,
            backgroundColor: 'dodgerblue',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
            borderRadius: 10,
          }}
          onPress={() => {}}>
          <View
            accessible
            accessibilityRole="button"
            accessibilityLabel="Login">
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Login
            </Text>
          </View>
        </RectButton>
      </View>

      <Text style={{textAlign: 'center', marginVertical: 10}}>
        Don't Have Acount? Please{` `}
        <Text
          onPress={() => {}}
          style={{
            color: 'red',
            textDecorationLine: 'underline',
          }}>
          Signup
        </Text>
      </Text>

      {/* <Button title="Login" />
      <TouchableHighlight underlayColor="black" onPress={() => {}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {'login'.toUpperCase()}
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity activeOpacity={0.8}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: 'blue',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {'login'.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => {}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            backgroundColor: '#9fa8f5',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
            }}>
            {'login'.toUpperCase()}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <Pressable
        android_ripple={{
          color: 'red',
        }}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          backgroundColor: '#9fa8f5',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Login
        </Text>
      </Pressable> */}
    </SafeAreaView>
  );
};

export default App;
