import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, Image, TouchableWithoutFeedback  } from 'react-native'
import { Icon, Input, TopNavigation, TopNavigationAction, Text, Button } from '@ui-kitten/components';

const Login: React.FC = ({ navigation }) => {

  const [value, setValue] = useState('');

  const handlerPressBack = () => {
    navigation.goBack()
  };

  const navigateToHome = () => {
    navigation.navigate("Badges");
 }

  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back'/>
  );

  const FacebookIcon = (props) => (
    <Icon {...props} name='facebook'/>
  );

  const GoogleIcon = (props) => (
    <Icon {...props} name='google'/>
  );

  const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );


  const BackAction = () => (
    <TopNavigationAction onPress={handlerPressBack} icon={BackIcon}/>
  );

  return (
    <KeyboardAvoidingView style={{flex:1, backgroundColor: "#FFF"}}>
      <TopNavigation
        accessoryLeft={BackAction}
        style={{marginTop: 30, backgroundColor: "transparent"}}
      />
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/logo.png')} />
        <Input
          placeholder='Email'
          value={value}
          size='large'
          onChangeText={nextValue => setValue(nextValue)}
          style={styles.input}
        />
        <Input
          value={value}
          placeholder='Senha'
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          size='large'
          onChangeText={nextValue => setValue(nextValue)}
        />
        <Text style={styles.forgotpassword}>Esqueceu a senha?</Text>
        <Button style={styles.loginButton} onPress={navigateToHome}>Fazer Login</Button>
        <Text style={styles.ou}>OU</Text>
        <Button accessoryLeft={FacebookIcon} style={styles.facebookButton} status="info">Login com o Facebook</Button>
        <Button accessoryLeft={GoogleIcon} status="danger">Login com o Google</Button>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 100,
    alignSelf: "center",
    width: 350,
  },
  image: {
    alignSelf: "center",
    marginBottom: 70
  },
  input: {
    marginBottom: 20
  },
  forgotpassword: {
    alignSelf: 'flex-end',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    marginTop: 5,
    color: "#777777"
  },
  loginButton: {
    marginTop: 50
  },
  ou: {
    textAlign: "center",
    fontFamily: 'Poppins_400Regular',
    marginTop: 15,
    marginBottom: 15
  },
  facebookButton: {
    marginBottom: 20
  },
});

export default Login;