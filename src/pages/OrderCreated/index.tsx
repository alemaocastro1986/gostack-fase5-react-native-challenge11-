import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { Container, Message } from './styles';

const OrderCreated: React.FC = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('DashboardStack');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Container>
      <Icon name="thumbs-up" color="#39B100" size={40.5} />
      <Message>Pedido Confirmado!</Message>
    </Container>
  );
};

export default OrderCreated;
