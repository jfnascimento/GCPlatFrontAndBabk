import Header from '@/components/header';
import Footer from '@/components/footer';
import { Container } from './styles.global';
import { DvHome } from './styles';
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react"

import Main from '@/components/home/main';

export default function Home({ country }) {
  const { data: session } = useSession() 


  return (
    <>
      <Header country={country} />
        <DvHome>
          <Container>
            <Main />
          </Container>
        </DvHome>
      <Footer country={country} />
    </>
  )
}

export async function getServerSideProps() {
    const { data } = await axios.get("https://api.ipregistry.co/?key=czrrlu5c4ylvi2fz");
    return {
        props: {
            country: {
                nome: data.location.country.name,
                sigla: data.location.country.code,
                bandeira: data.location.country.flag.wikimedia,
            }
        }
    }
}