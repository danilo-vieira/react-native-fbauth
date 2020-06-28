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
  font-size: 24px;
`;

export const BiggerTitle = styled.Text`
  color: #2f3152;
  font-size: 32px;
`;

export const IDInfoContainer = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const IDInfoText = styled.Text`
  color: #2f3152;
  font-size: 26px;
`;

export const FBLogoutButton = styled(RectButton)`
  background-color: #2f3152;
  border-radius: 8px;

  position: absolute;
  bottom: 60px;
  right: 20px;
  left: 20px;
  padding: 16px;

  align-items: center;
`;

export const FBLogoutButtonText = styled.Text`
  color: #bfc0d9;
  font-size: 16px;
`;
