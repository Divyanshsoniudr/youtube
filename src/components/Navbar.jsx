import React from 'react'
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
const Container = styled.div`
    height: 60px;


`
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex; 
    align-items:center;
    justify-content: space-between;
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;

const Language = styled.div`
    font-size: 14 px;z
 `;
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items:center;
    margin-left: 25px;
    padding:5px;
`;

const Input=styled.div`
    border:none;
`;

const Center = styled.div`
flex:1;
text-align:center;
`; 

const Logo = styled.div`
    font-weight: bold;
`
const Right  = styled.div`
flex:1;
display:flex;
align-item:center;
justify-content:flex-end;
 `;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px;
`;

 
const Home = () => {

    return(
        <Container> 
            <Wrapper>
            <Left>
                <Language>EN</Language> 
                    <SearchContainer>
                      input
                      <SearchOutlinedIcon style={{color:"gray",fontSize:16}} />
                    </SearchContainer>   
            </Left>
            <Center><Logo>DRIPSON.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingBagOutlinedIcon/>
                </Badge>
                </MenuItem>
            
            
            
            </Right> 
             </Wrapper>
        </Container>
    )
}

export default Home