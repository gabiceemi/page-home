import React from 'react';
import * as eva from '@eva-design/eva';
import { Button, Text } from '@ui-kitten/components';
import Swiper from 'react-native-swiper'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native'

const Tutorial: React.FC = ({ navigation }) => {

  const handlerPressJump = () => {
    navigation.navigate("Login")
  };
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#FF5B7F', '#FC9272']}
        style={{
          left: 0,
          right: 0,
          top: 0,
          height: 300,
          flex:1
        }}
      >
        <Swiper loop={false} dot={
            <View
              style={{
                backgroundColor: '#D4D4D4',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#FFF',
                width: 10,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }>
          <View>
            <Image style={styles.image} source={require('../../../assets/Tutorial/1.png')} />
            <Text style={styles.title}>Página 1</Text>
            <Text style={styles.desc}>Within non-expo environment, we also need to complete installation for iOS by linking react-native-svg.</Text>
          </View>
          <View>
          <Image style={styles.image} source={require('../../../assets/Tutorial/2.png')} />
            <Text style={styles.title}>Página 2</Text>
            <Text style={styles.desc}>Within non-expo environment, we also need to complete installation for iOS by linking react-native-svg.</Text>
          </View>
          <View>
          <Image style={styles.image} source={require('../../../assets/Tutorial/3.png')} />
            <Text style={styles.title}>Página 3</Text>
            <Text style={styles.desc}>Within non-expo environment, we also need to complete installation for iOS by linking react-native-svg.</Text>
          </View>
        </Swiper>
        <Text style={styles.button} onPress={handlerPressJump} category='label'>Pular</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    marginTop: 120
  },
  title: {
    textAlign: "center",
    marginTop: 111.11,
    color: "#FFF",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold"
  },
  desc: {
    textAlign: "center",
    alignSelf: "center",
    marginTop: 10,
    color: "#FFF",
    fontFamily: "Poppins_400Regular",
    flexWrap: "wrap",
    maxWidth: 250
  },
  button: {
    color: "#FFF",
    fontFamily: "Poppins_600SemiBold",
    marginTop: 788,
    marginLeft: 10,
    position: "absolute",
    fontSize: 15
  }
});

export default Tutorial;