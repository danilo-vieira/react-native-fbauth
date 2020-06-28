import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(LinearGradient).attrs({
  colors: ['#797ED1', '#76B2DE'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  color: #2f3152;
  font-size: 40px;

  margin-top: 30px;
`;

export const TextContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 22px;

  margin-top: 290px;
`;

export const FBLoginContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const FBLoginButton = styled(RectButton)`
  padding: 16px;
  margin-bottom: 60px;
  align-items: center;

  background-color: #2f3152;
  border-radius: 8px;
`;

export const FBLoginButtonText = styled.Text`
  color: #bfc0d9;
  font-size: 16px;
`;
