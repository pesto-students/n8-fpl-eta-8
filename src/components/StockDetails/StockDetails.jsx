import React from 'react'

// mui 
import { Container, Typography } from '@mui/material';

// webapp components
import Header from '../Header/Header';

import { useParams } from "react-router";
import ChallengeContext from './ChallengeContext';


export default function StockDetails() {

  const { stock } = useParams();


  return (
    <>
      <Container>
        <Header />
        <ChallengeContext/>                
      </Container>
    </>
  )
}
