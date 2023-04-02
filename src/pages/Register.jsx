import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) url("https://cdn.wallpapersafari.com/85/8/cWKXio.jpg") center;
    display: flex;
    align-item: center;
    justify-content:center;
    background-size: cover;
`;
const Wrapper = styled.div`
    width: 40%;
    padding : 20px;
    background-color:white;


`;
const Title = styled.form`
    font-size: 24px;
    font-weight: 400;
`;
const Form = styled.div`
display:flex;
flex-wrap: wrap;
`;
const Input = styled.div`
    flex: 1;
    min-width : 40%
    margin : 20px 10px 0px 0px;
    padding: 10px;
`;
const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;

`;
const Button = styled.div`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color : black
    color:white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" ></Input>
                    <Input placeholder="Last Name" ></Input>
                    <Input placeholder="username" ></Input>
                    <Input placeholder="email" ></Input>
                    <Input placeholder="password" ></Input>
                    <Input placeholder="Confirm Password" ></Input>
                    <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accoundance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>
                        CREATE
                    </Button>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Register