import React from 'react'
import './main.scss';
import { Stack, TextField } from "@mui/material"

function Main() {
  return (
    <div className="main">
        <Stack spacing={1} className="main-stack">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Stack>
    </div>
  )
}

export default Main
