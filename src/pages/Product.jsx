import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`;
const ImgContainer = styled.div`
flex: 1;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
`;
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;
const Title = styled.div`
    font-weigh: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const Filter = styled.div``;
const FilterTitle = styled.div``;
const FilterColor = styled.div`
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${prop=>props.color};
    margin: 0px 5px;
    curson: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const AmountContainer = styled.div`0
    display: flex;
    align-items: center;
    font-weight: 700;

`;

const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flexbox;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;

`;

const Button = styled.button`
    padding:15px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color:black;
        color: white;
    }
`;

const Product= () => {
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src= "https://i.ibb.co/56qMxwr/jean.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>MEN's 3 Pack Rings</Title>
                    <Desc>Add some sparkle to your fingers with these 3-pack rings by H&M. These metal rings come in various designs and colours to suit your style and mood. Whether you prefer a simple band or a signet ring with a plastic stone, you can mix and match these rings to create your own look. These rings are made of zinc, brass, reconstitute stone and resin for durability and shine.</Desc>
                    <Price>Rs. 1500</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color = "black"/>
                            <FilterColor color = "darkblue"/>
                            <FilterColor color = "turquoise"/>

                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXl</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                        <Button>BUY NOW</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product