import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
backgroundColor:#fff;
  
`;

export const ContainerLogo = styled.View`
flex:3;
borderBottomLeftRadius: 50;
borderBottomRightRadius: 50;
backgroundColor:#7569f5;
elevation:5;
marginBottom:10;
justifyContent:center;
alignItems:center;

`;
export const Logo = styled.Image`

`

export const ContainerList = styled.View`

flex:3;
backgroundColor:#fff;
borderTopLeftRadius: 30;
borderTopRightRadius: 30;
paddingLeft:30;
paddingRight:30;
paddingTop:10;
paddingBottom:20;


`;

export const ContainerOption = styled.View`
justifyContent:space-between;
flexDirection:row;
marginBottom:20;
`;

 export const Option = styled.TouchableOpacity`
 justifyContent:center;
 alignItems:center;
 `;

 export const CircleOption = styled.View`

 height: 70;
 width:70;
 backgroundColor:#fff;
 elevation:5;
 borderRadius:40;
 justifyContent:center;
 alignItems:center;
 marginBottom:10;
 
 `;

 export const OptionText = styled.Text`
 color:#7569f5;
 fontSize:9;
 `;

export const BottomArea = styled.View`
flex:1;
backgroundColor:#fff;
justifyContent:space-between;
alignItems:center;
flexDirection:row;
paddingLeft:30;
paddingRight:30;
`;

export const TextContainerSocial = styled.View`
backgroundColor:#7569f5;
width:100;
height:30;
justifyContent:center;
alignItems:center;
borderRadius:20;

`;
export const TextSocial  = styled.Text`
color:#fff;
fontWeight:bold;
`;

export const SocialIcons = styled.View`
flexDirection:row;
`;
export const SocialCircle = styled.View`
backgroundColor:#7569f5;
width:50;
height:50;
borderRadius:25;
justifyContent:center;
alignItems:center;
marginLeft:5;
marginRight:5;

`;