import React from 'react'

// mui 
import { Container, Typography } from '@mui/material';

// webapp components
import Header from '../Header/Header';

import { useParams } from "react-router";


export default function StockDetails() {

  const {stock} = useParams();


  return (
    <>
      <Typography variant="h1">
        {stock}
      </Typography>
        </>
  )
}
