import styled from 'styled-components';
import { Send } from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 60vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 10px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 10px 20px;
  font-size: 16px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favorite products!</Description>
      <InputContainer>
        <Input placeholder='Your email:' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
