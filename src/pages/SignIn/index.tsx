import React, { useCallback, useEffect } from 'react';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { useNavigation } from '@react-navigation/native';

import { Alert } from 'react-native';

import {
  Container,
  Title,
  TextContainer,
  Text,
  FBLoginContainer,
  FBLoginButton,
  FBLoginButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        navigate('Dashboard', { token: data.accessToken });
      }
    });
  }, [navigate]);

  const handleFBLogin = useCallback(async () => {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      Alert.alert('Login cancelado', 'Porque você cancelou? :(');
    } else if (result.error) {
      Alert.alert(
        'Erro',
        `O seguinte erro impossibilitou que o login fosse realizado: ${result.error}`,
      );
    } else {
      const data = await AccessToken.getCurrentAccessToken();

      if (data) {
        navigate('Dashboard', { token: data.accessToken });
      }

      Alert.alert(
        'Login realizado',
        `Login feito com sucesso com as permissões:
        ${result.grantedPermissions?.toString()}`,
      );
    }
  }, [navigate]);

  return (
    <Container>
      <Title>Olá!</Title>

      <TextContainer>
        <Text>Imagine um form de cadastro aqui</Text>
      </TextContainer>

      <FBLoginContainer>
        <FBLoginButton onPress={handleFBLogin}>
          <FBLoginButtonText>Ou faça login com o Facebook</FBLoginButtonText>
        </FBLoginButton>
      </FBLoginContainer>
    </Container>
  );
};

export default SignIn;
