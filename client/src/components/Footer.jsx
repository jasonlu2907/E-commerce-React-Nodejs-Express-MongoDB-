import styled from 'styled-components';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Room,
  Phone,
  Mail,
} from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  padding: 40px 20px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;

//TODO: LEFT SIDE
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: 700;
`;
const Description = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

//TODO: CENTER SIDE
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
`;

//TODO: RIGHT SIDE
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SITE</Logo>
        <Description>
          There are many variations of passages of Lorem ipsum available, but
          the majority have suffered alteration n some form, by injected humour,
          or randomism words which don't look even slightly believable.
        </Description>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>

          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>

          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>

          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>About</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          4800 U.S. 287 Frontage Rd
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +1 (817) 563-1005
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: '10px' }} />
          site@customer.service
        </ContactItem>
        <Payment src='http://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
