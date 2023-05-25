"use client"
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Login from './Login';

const metadata = {
    title: "AliExpress - Online Shopping for Popular Electronics, Fashion, Home & Garden, Toys & Sports, Automobiles and More products - AliExpress",
};

export default function index({ session }) {
    const [country, setCountry] = useState({
        nome: "Brasil",
        bandeira: "https://cdn.ipregistry.co/flags/wikimedia/br.svg",
    });
    

    return (
        <>
            <Header country={country} />
            <Login />
            <Footer country={country} />
        </>
                    
    );
}