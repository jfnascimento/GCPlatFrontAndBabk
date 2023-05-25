import Header from '@/components/header';
import Footer from '@/components/footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession() 
    const [country, setCountry] = useState([{
        props:{
            nome: "",
            sigla: "",
            bandeira: "",
    }}]);

    useEffect( () => {
        let datass = axios.get("https://api.ipregistry.co/?key=czrrlu5c4ylvi2fz")
            .then((res) => {
                setCountry({ 
                        nome: res.data.location.country.name,
                        sigla: res.data.location.country.code,
                        bandeira: res.data.location.country.flag.wikimedia,
                    }
                );
                }
                );
            } , []);
  return (
    <>
      <Header country={country} />
        {session ? "Logado" : "Não logado"}
            {console.log(session)
        }
      <Footer country={country} />
    </>
  )
}
