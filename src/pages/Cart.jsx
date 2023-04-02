import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
const Container = styled.div`

`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        Cart
        <Footer/>
    </Container>
  )
}

export default Cart