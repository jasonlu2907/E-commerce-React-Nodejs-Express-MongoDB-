import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('https://i.ibb.co/ZS345wF/loginpage.jpg') center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Tilte = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(0, 2px);
  }
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Tilte>SIGN IN</Tilte>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>LOGIN</Button>
          <Link>Forget Password</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
