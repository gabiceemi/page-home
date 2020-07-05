import React from 'react';

import { KeyboardAvoidingView, TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const handlerPressBack = () => {
  navigation.goBack()
};

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const BackAction = () => (
  <TopNavigationAction onPress={handlerPressBack} icon={BackIcon} />
);

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{alignItems:"flex-start",flex:1}}>
        <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 18, marginTop: 10, fontWeight:"bold", color: '#0C1226'}}>{item.name}</Text>
        <Text style={{fontFamily: 'Poppins_300Light', fontSize: 18, color: 'rgba(130, 155, 250, 0.29)'}}>{item.position}</Text>
      </View>
      <Image source={{uri:item.photo}}  style={{width:100, height:100, marginTop: 20}} />
      <View style={{alignItems:"center", alignContent: "space-between", flex:1, position:'absolute', flexDirection: 'row', width: 300}}>
        <Image source={{uri:item.badge1}} style={{width:32, height:32, marginLeft: 30, marginTop: 120}} />
        <Image source={{uri:item.badge2}} style={{width:32, height:32, marginLeft: 10, marginTop: 120}} />
        <Image source={{uri:item.badge3}} style={{width:32, height:32, marginLeft: 10, marginTop: 120}} />
        <Image source={{uri:item.badge4}} style={{width:32, height:32, marginLeft: 10, marginTop: 120}} />
        <Image></Image>
      </View>
    </View>
  );
}

export default class Badges extends React.Component {
  state = {
    data:[
        {
            "name": "Devoradora de Quizes",
            "position": "100% Completo",
            "photo": "https://img.elo7.com.br/product/zoom/21547F1/trofeu-decorativo-em-ceramica-decoracao-festa-cachepot-trofeu.jpg",
            "badge1": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge2": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge3": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge4": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
        },
        {
            "name": "Máquina de Leitura",
            "position": "60% Completo",
            "photo": "https://img.elo7.com.br/product/zoom/21547F1/trofeu-decorativo-em-ceramica-decoracao-festa-cachepot-trofeu.jpg",
            "badge1": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge2": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge3": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge4": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
        },
        {
            "name": "Amante da Literatura",
            "position": "20% Completo",
            "photo": "https://img.elo7.com.br/product/zoom/21547F1/trofeu-decorativo-em-ceramica-decoracao-festa-cachepot-trofeu.jpg",
            "badge1": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge2": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge3": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
            "badge4": "https://cdn2.vectorstock.com/i/1000x1000/92/91/luxury-gold-badge-vector-20859291.jpg",
        }
    ]
  }

  render(){
    return (
      <View style={styles.container}>
        <TopNavigation
        accessoryLeft={BackAction}
        style={{marginTop: 30, backgroundColor: "transparent"}}
        title={<Text style={styles.topText}>Conquistas</Text>}
      />
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 0,
    backgroundColor: '#F7F7F7',

  },
  topText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#515C6F',
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular',
  },
  listItem:{
    margin:10,
    padding:30,
    backgroundColor:"#FFF",
    width:"85%",
    height: 200,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  }
});