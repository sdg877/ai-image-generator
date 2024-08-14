// import { useState } from 'react'
// import './main.scss';
// import { Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button, Snackbar } from "@mui/material"

// const sizes = {
//     small: "256x256",
//     medium: "512x512",
//     large: "1024x1024"
// }

// function Main() {
//     const [prompt, setPrompt ] = useState("");
//     const [size, setSize] = useState(sizes.small)
//     const [open, setOpen] = useState(false)

//     const clickHandler = () => {
//       console.log({ prompt, size });

//       if (prompt === "") {
//         // alert("Please enter something");
//         setOpen(true);
//         return;
//       }
//     }

//   return (
//     <div className="main">
//         <Stack spacing={1} className="main-stack">
//             <TextField label="Prompt" variant="outlined" />
//             <FormControl fullWidth>
//                <InputLabel>Size</InputLabel>
//                <Select value={size} label="Size" onChange={(e) => setSize(e.target.value)}>
//                   <MenuItem value={sizes.small}>small</MenuItem>
//                   <MenuItem value={sizes.medium}>medium</MenuItem>
//                   <MenuItem value={sizes.large}>large</MenuItem>
//                </Select>
//                <Button variant="contained" onClick={clickHandler} sx={{ mt: "1rem" }}>
//                   Generate New Image
//                </Button>
//             </FormControl>
//         </Stack>

//         <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="Note archived">
//         {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
//         <h5>Error</h5>
//         </Snackbar>
//     </div>
//   )
// }

// export default Main


import { useState } from 'react';
import './main.scss';
import axios from "axios";
import { Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button, Snackbar, Alert } from "@mui/material";

const sizes = {
    small: "256x256",
    medium: "512x512",
    large: "1024x1024"
}

function Main() {
    const [prompt, setPrompt ] = useState(""); 
    const [size, setSize] = useState(sizes.small);
    const [open, setOpen] = useState(false);

    const clickHandler = async () => {
      try {
        if (prompt === "") {
          // alert("Please enter something")
          setOpen(true);
          return;
        }
        console.log({ prompt, size }); 
        const url = "http://localhost8200/generate";
        const data ={ prompt, size };
        const response = await axios.post(url, data);
      } catch (error) {

      }
    }

    return (
      <div className="main">
          <Stack spacing={1} className="main-stack">
              <TextField 
                label="Prompt" 
                variant="outlined" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} // Update prompt state when user types
              />
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

          <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="Please enter something">
          <Alert severity="error">This is an error alert — check it out!</Alert>
          </Snackbar>
      </div>
    )
}

export default Main;
