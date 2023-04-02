import styled from "styled-components";
import Navbar from "./components/Navbar";
import Announcement from "./components/Annoucement"

const Container = styled.div``;

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
        </Container>
    )


}

export default ProductList