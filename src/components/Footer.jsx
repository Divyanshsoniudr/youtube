import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

const container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding:20px;
`;
const Logo = styled.h1``;
const Desc= styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Title =styled.h3`
    margin-buttom: 30px;

`;
const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
`;
const ListItem =styled.li`
    width: 50%
    margin-bottom: 10px;
`;

const Center= styled.div`
    flex:1;
    padding 20px;
    
`;


const Right = styled.div`
    flex:1;
    padding: 20px

const ContactItem = styled.div`

margin-buttom: 20px;
display:flex;
align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;
const Footer= ()=>{

    return (
        <Container>
            <Left>
                <Logo>DRIPSON.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Aliquam sem fringilla ut morbi. Eros donec ac odio tempor orci dapibus.</Desc>
                <SocialContainer>
                    <SocialIcon color="385999"><FacebookOutlinedIcon/> </SocialIcon>
                    <SocialIcon color="e4405f"><InstagramIcon/></SocialIcon>
                    <SocialIcon color="55acee"><TwitterIcon/></SocialIcon>
                    <SocialIcon color="e60023"><PinterestIcon/></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>

                <Title>
                    Useful Links
                </Title>
                <List>
                    <Listitem>Home</Listitem>
                    <Listitem>Cart</Listitem>
                    <Listitem>Categories</Listitem>
                    <Listitem>Category 2</Listitem>
                    <Listitem>Category 3</Listitem>
                    <Listitem>My Account</Listitem>
                    <Listitem>Order Tracking</Listitem>
                    <Listitem>Wishlist</Listitem>
                    <Listitem>Terms</Listitem>
                </List>
            </Center>
            <Right> 
                <Title>Contact</Title>
                <ContactItem>
                <MapOutlinedIcon style={{marginRight: "10px"}}/>58, Nadareshwar Colony, Udaipur
                </ContactItem>
                <ContactItem>
                  <PhoneAndroidOutlinedIcon style={{marginRight: "10px"}}/>  +914545456852
                </ContactItem>
                <ContactItem>
                   <AlternateEmailOutlinedIcon style={{marginRight: "10px"}}/> contact@dripson.co
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer;