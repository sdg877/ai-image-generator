import { useState } from 'react'
import './main.scss';
import { Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material"

const sizes = {
    small: "256x256",
    medium: "512x512",
    large: "1024x1024"
}

function Main() {
    // const [prompt, setPrompt ] = useState("");
    const [size, setSize] = useState(sizes.small)

    const clickHandler = () => {
      console.log({ prompt, size });

      if (prompt === "") {
        alert("Please enter something");
        return;
      }
    }

  return (
    <div className="main">
        <Stack spacing={1} className="main-stack">
            <TextField label="Prompt" variant="outlined" />
            <FormControl fullWidth>
               <InputLabel>Size</InputLabel>
               <Select value={size} label="Size" onChange={(e) => setSize(e.target.value)}>
                  <MenuItem value={sizes.small}>small</MenuItem>
                  <MenuItem value={sizes.medium}>medium</MenuItem>
                  <MenuItem value={sizes.large}>large</MenuItem>
               </Select>
               <Button variant="contained" onClick={clickHandler} sx={{ mt: "1rem" }}>
                  Generate New Image
               </Button>
            </FormControl>
        </Stack>
    </div>
  )
}

export default Main
