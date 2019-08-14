import React, { Component } from 'react';

import { Image } from 'react-native';

import Icons from 'react-native-vector-icons/Feather';

import Hospitalar from './Hospitalar'

import {
  Container,
  ListItems,
  IconsArea,
  OptionText,
  Items,
} from './styles'

import { createStackNavigator, createAppContainer } from "react-navigation";

class Produtos extends Component {

  static navigationOptions = {
    header: null,
};

  render() {

    const {navigate} = this.props.navigation;

    return (
        <Container>
          <ListItems>

            <Items onPress={() => navigate('Hospitalar')}>
              <IconsArea style={{marginRight:20}}>
                <Icons name="check-circle" size={20} color={"#7569f5"}/>
              </IconsArea>
              <OptionText>Linha Hospitalar</OptionText>
            </Items>

            <Items>
              <IconsArea style={{marginRight:20}}>
                <Icons name="check-circle" size={20} color={"#7569f5"}/>
              </IconsArea>
              <OptionText>Linha Oftálmica</OptionText>
            </Items>

            <Items>
              <IconsArea style={{marginRight:20}}>
                <Icons name="check-circle" size={20} color={"#7569f5"}/>
              </IconsArea>
              <OptionText>Linha Urológica</OptionText>
            </Items>

            <Items>
              <IconsArea style={{marginRight:20}}>
                <Icons name="check-circle" size={20} color={"#7569f5"}/>
              </IconsArea>
              <OptionText>Linha Veterinária</OptionText>
            </Items>


          </ListItems>

        </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Produtos: {
    screen: Produtos,
    navigationOptions: () => ({
      // header: null,
    }),
  },

  Hospitalar: {
    screen: Hospitalar,
    navigationOptions: () => ({
      header: null,
    }),

  },
},

);

export default createAppContainer(AppNavigator);