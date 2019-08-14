import React, { Component } from 'react';
import {View} from 'react-native'
import {Container,Title,Item,List} from './style';
import {data} from '../../../services/data'

export default class Hospitalar extends Component {
        static navigationOptions = {
      title:'Hospitalar'
  
    };
  render() {
    return(
        <Container>

          <List>


        {data.hospitalarTitle.map((item)=>{
          return(
            <View style={{height:35,marginBottom:20,}} key={item.id}>
              <Title>{item.title}</Title>
            </View>
           )
          })}
          {data.hospitalar.map((item)=>{
            return(
              <View key={item.id}>
                <Item>{item.item}</Item>
              </View>
            )
          })}



        {data.hospitalarTitle2.map((item)=>{
          return(
            <View style={{height:35,marginBottom:10,marginTop:20}} key={item.id}>
              <Title>{item.title}</Title>
            </View>
           )
          })}
          {data.hospitalar2.map((item)=>{
            return(
              <View key={item.id}>
                <Item>{item.item}</Item>
              </View>
            )
          })}


{data.hospitalarTitle3.map((item)=>{
          return(
            <View style={{height:35,marginBottom:10,marginTop:20}} key={item.id}>
              <Title>{item.title}</Title>
            </View>
           )
          })}
          {data.hospitalar3.map((item)=>{
            return(
              <View key={item.id}>
                <Item>{item.item}</Item>
              </View>
            )
          })}
      </List>

  



        </Container>
    );
  }
}
