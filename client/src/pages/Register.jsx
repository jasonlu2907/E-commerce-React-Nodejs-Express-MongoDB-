import styled from 'styled-components';
import {mobile} from '../responesive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://i.ibb.co/3m7cktB/registerpage.jpg') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  /* ${mobile({
  width: '75%'
  })} */
`;
const Tilte = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 16px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(0, 2px);
  }

  ${mobile({
  width: '70%', padding: '7px 10px'
  })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Tilte>Login Form</Tilte>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            information in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
