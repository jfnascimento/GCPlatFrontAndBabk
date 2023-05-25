//Hedaer
"use client";
import Ad from './Ad';
import Top from './Top';
import { Main } from './styles';
import MainCont from './MainCont';

export default function index({ country, session }) {
  return (
    <Main>
      <Ad />
      <Top country={ country }  />
      <MainCont />
    </Main>
  )
}