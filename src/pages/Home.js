import Header from '../components/Header'
import Featured from '../components/Featured'
import styled from "styled-components"
import WhyUs from '../components/WhyUs'

const HomeContainer = styled.div`
    padding: 40px;
    width: 100%;

    @media only screen and (min-width:800px){
      padding: 30px 0;
    }

    @media only screen and (min-width:1000px){
      padding: 50px 0;
      max-width: 1200px;
      margin: 0 auto;
    }
`

const Home = () => {
  return (
    <HomeContainer>
      <Header/>
      <Featured/>
      <WhyUs/>
    </HomeContainer>
  )
}

export default Home
