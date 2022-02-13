import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "../components/Themed";

//COMPONENTS
import { Main } from "../components/Main";

//SYTLES
import LoginScreenStyles from "./LoginScreenStyles";
import { Image , TextInput } from "./LoginScreenStyles";

export const LoginScreen = ({}) => {

  const [loginForm, setLoginForm] = useState({
    email: '',
    password:''
  })
  
const handleChange = (name, event)=>{
    const value = event.target.value;
    setLoginForm(values => ({...values, [name]: value}))
  }

  useEffect(() => {
    console.log(loginForm)
  }, [loginForm])

  return (
    <Main>
      <LoginScreenStyles>
        <View>
          <Image
            source={require('../assets/images/login.jpg')}
          />
          <View>
            <TextInput
              onChange={(e)=> handleChange('email', e) }
              value={loginForm.email}
              autoFocus={true}
              keyboardType='email'
              placeholder='Type your email here'
              textContentType='username'
            />
          </View>
          <View>
            <TextInput
              onChange={(e)=> handleChange('password', e) }
              value={loginForm.password}
              placeholder='Type your password here'
              textContentType='password'
              secureTextEntry={true}
            />
          </View>
        </View>
      </LoginScreenStyles>
    </Main>
  );
};
