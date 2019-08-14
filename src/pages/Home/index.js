import React, { Component } from 'react';
import { 
  Container,
  ContainerLogo,
  Logo,
  ContainerList,
  BottomArea,
  Option,
  CircleOption,
  OptionText,
  ContainerOption,
  TextContainerSocial,
  TextSocial,
  SocialIcons,
  SocialCircle
} from './styles';

import  {Image} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Products from '../Produtos';
import Institucional from '../Institucional';
import Localizacao from '../Localizacao';
import Orcamento from '../Orcamento';
import Faq from '../Faq';
import Contato from '../Contato'

class Home extends Component {

  static navigationOptions = {
    headerTitle : <Image
    source={require('../../assets/img/logoTop.png')}
    style={{ marginLeft:30 }}/>,
    headerStyle: {
      backgroundColor: '#7569f5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {

    const {navigate} = this.props.navigation;

    return (
    <Container>

        <ContainerLogo>
          <Logo
          source={require('../../assets/img/logo.png')}
          />

        </ContainerLogo>

  
        <ContainerList>

         <ContainerOption>
        <Option onPress={() => navigate('Products')}>
            <CircleOption>
              <Icons name="briefcase" size={20} color={"#7569f5"} />
            </CircleOption>
            <OptionText>PRODUTOS</OptionText>
        </Option>
        
         
        <Option onPress={() => navigate('Localizacao')}>
            <CircleOption>
              <Icons name="briefcase" size={20} color={"#7569f5"} />
            </CircleOption>
            <OptionText>LOCALIZAÇÃO</OptionText>
        </Option>
        
         
        <Option onPress={() => navigate('Institucional')}>
            <CircleOption >
              <Icons name="briefcase" size={20} color={"#7569f5"} />
            </CircleOption>
            <OptionText>INSTITUCIONAL</OptionText>
        </Option>
        </ContainerOption>

        <ContainerOption>


        <Option onPress={() => navigate('Orcamento')}>
            <CircleOption>
              <Icons name="briefcase" size={20} color={"#7569f5"} />
            </CircleOption>
            <OptionText>ORÇAMENTO</OptionText>
        </Option>
        
         
        <Option onPress={() => navigate('Faq')}>
            <CircleOption>
              <Icons name="briefcase" size={20} color={"#7569f5"} />
            </CircleOption>
            <OptionText>FAQ</OptionText>
        </Option>
        
         
        <Option onPress={() => navigate('Contato')}>
            <CircleOption>
              <Icons name="briefcase" size={20} color={"#7569f5"} />
            </CircleOption>
            <OptionText>CONTATO</OptionText>
        </Option>
         
        </ContainerOption>
            
           

        </ContainerList>

        <BottomArea>
          <TextContainerSocial>

            <TextSocial>Siga-Nos</TextSocial>
          </TextContainerSocial>

          <SocialIcons>
          <SocialCircle>
              <Icons name="instagram" size={20} color={"#fff"} />
          </SocialCircle>

          <SocialCircle>
              <Icons name="facebook" size={20} color={"#fff"} />
          </SocialCircle>

          </SocialIcons>


        </BottomArea>
    </Container>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Products: {
    screen: Products,
        navigationOptions: () => ({
          title:'Linhas de Produtos',
          headerStyle: {
              backgroundColor: '#7569f5',
          },
              headerTintColor: '#fff',
    }),
  },
  Institucional: {
    screen: Institucional,
    navigationOptions: () => ({
      title:'Institucional',
      headerStyle: {
          backgroundColor: '#7569f5',
      },
          headerTintColor: '#fff',
}),
    
  },

  Localizacao : {
    screen: Localizacao
  },
  Orcamento : {
    screen: Orcamento
  },
  Faq: {
    screen: Faq
  },

  Contato: {
    screen: Contato
  },
});

export default createAppContainer(AppNavigator);