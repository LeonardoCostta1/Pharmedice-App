import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
  
`;

export const List = styled.ScrollView.attrs({
    showsVerticalScrollIndicator:false,
  })`
    flex:1;
    paddingLeft:30;
    paddingRight:30;
    paddingBottom:30;
    
  `;
  
export const Title = styled.Text`
    font-weight:bold;
    color:#7569f5;
    font-size:18;
`;

export const Item = styled.Text`
    font-weight:bold;
    font-size:14;
    color:#848484;
`;