import { CircularProgress, Grid } from '@chakra-ui/react'
import React from 'react'

export const CheckingAuth = () => {
  return (
    <Grid
    spacing={0}
    direction='column'
    alignItems='center'
    justifyContent='center'
    sx={{minHeight:'100vh', backgroundColor:'primary.main',padding:4}}
    >
        <CircularProgress  isIndeterminate  sx={{color:'white'}}/>
    </Grid>
  )
}