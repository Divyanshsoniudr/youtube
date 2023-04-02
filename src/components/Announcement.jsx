import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: Black;
    color: white;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;
const Announcement = ()=>{
     return (
        <Constainer>
            Welcome to Our Store!  Free Shipping on All orders above Rs. 1000
        </Constainer>
     )
}

export default Announcement