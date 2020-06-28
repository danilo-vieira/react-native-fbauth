import React, { useState, useEffect, useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

import { Alert, ActivityIndicator } from 'react-native';

import {
  Container,
  Title,
  BiggerTitle,
  IDInfoContainer,
  IDInfoText,
  FBLogoutButton,
  FBLogoutButtonText,
} from './styles';

interface RouteParams {
  token: string;
}

interface User {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRoute();
  const { goBack, navigate } = useNavigation();
  const { token } = params as RouteParams;

  const [loading, setLoadig] = useState(true);
  const [userData, setUserData] = useState<User>({} as User);

  useEffect(() => {
    const userDataRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters: { fields: { string: 'name, email' } },
      },
      (error, result) => {
        if (error) {
          Alert.alert('Erro', 'Um erro ocorreu ao buscar as suas informações');

          LoginManager.logOut();
          goBack();
        } else if (result) {
          setUserData(result as User);
          setLoadig(false);
        }
      },
    );

    new GraphRequestManager().addRequest(userDataRequest).start();
  }, [goBack, token]);

  const handleFBLogout = useCallback(() => {
    LoginManager.logOut();
    setUserData({} as User);
    navigate('SignIn');
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size={60} color="#2F3152" />
      ) : (
        <>
          <Title>Bem vindo,</Title>
          <BiggerTitle>{userData.name}</BiggerTitle>

          <IDInfoContainer>
            <IDInfoText>
              Seu ID:
              {userData.id}
            </IDInfoText>
          </IDInfoContainer>

          <FBLogoutButton onPress={handleFBLogout}>
            <FBLogoutButtonText>Fazer Logout</FBLogoutButtonText>
          </FBLogoutButton>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
