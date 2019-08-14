import styled from 'styled-components/native';

import {StyleSheet} from 'react-native'

export const Container = styled.View`
  flex:1;
  
`;

export const ListItems = styled.View`

`;

export const Items = styled.TouchableOpacity`
paddingLeft:30;
paddingRight:30;
flexDirection:row;
alignItems:center;
height:70;
border-bottom-width:${StyleSheet.hairlineWidth}px;
border-bottom-color:#ccc;

`;

export const IconsArea = styled.View`

height:40;
width:40;
backgroundColor:#fff;
elevation:5;
borderRadius:20;
justifyContent:center;
alignItems:center;

`
export const OptionText =styled.Text`
color:#7569f5;
`