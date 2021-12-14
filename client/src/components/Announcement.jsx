import styled from 'styled-components';

const Container = styled.div`
  color: white;
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders over $50!</Container>;
};

export default Announcement;
