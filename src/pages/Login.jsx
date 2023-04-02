import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) url("https://thearchitecturedesigns.com/wp-content/uploads/2019/10/Modern-Wallpaper6.jpg") center;
    display: flex;
    align-item: center;
    justify-content:center;
    background-size: cover;

`;
const Wrapper = styled.div`
    width: 25%;
    padding : 20px;
    background-color:white;


`;
const Title = styled.form`
    font-size: 24px;
    font-weight: 400;
`;
const Form = styled.div`
display:flex;
flex-direction: column;
`;
const Input = styled.div`
    flex: 1;
    min-width : 40%
    margin : 10px 0px;
    padding: 10px;
`;

const Button = styled.div`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color : black
    color:white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.div`
    margin: 5px 0px;
    font-size: 12px
    text-decoration: line;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        
        <Wrapper>
            <Title>SIGN IN  </Title>
                <Form>
                    <Input placeholder="username" ></Input>
                    <Input placeholder="password" ></Input>
                    <Button>
                        LOGIN
                    </Button>
                    <Link>Can't Remember Your Password?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
        </Wrapper>
    </Container>
  )
}

export default Register