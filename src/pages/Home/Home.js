import { Container, Title } from "./Home.styled";

function Home() {
  return (
    <Container>
      <Title>
        Phonbook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  )
}

export default Home;