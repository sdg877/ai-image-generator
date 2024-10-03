import { useState } from "react";
import "./main.scss";
import axios from "axios";
import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

const sizes = {
  small: "256x256",
  medium: "512x512",
  large: "1024x1024",
};

function Main() {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState(sizes.small);
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    try {
      if (prompt === "") {
        setOpen(true);
        return;
      }
      setLoading(true);
      const url = `${process.env.REACT_APP_BACKEND_URL}/generate`;
      const data = { prompt, size };
      const response = await axios.post(url, data);
      const imgSrc = response.data.src;
      setImg(imgSrc);
      setLoading(false);
    } catch (error) {
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <Stack spacing={1} className="main-stack">
        <TextField
          label="Prompt"
          variant="outlined"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Size</InputLabel>
          <Select
            value={size}
            label="Size"
            onChange={(e) => setSize(e.target.value)}
          >
            <MenuItem value={sizes.small}>small</MenuItem>
            <MenuItem value={sizes.medium}>medium</MenuItem>
            <MenuItem value={sizes.large}>large</MenuItem>
          </Select>
          <Button
            variant="contained"
            onClick={clickHandler}
            sx={{ mt: "2rem" }}
          >
            Generate New Image
          </Button>
        </FormControl>
      </Stack>
      {loading && <CircularProgress color="success" sx={{ mt: "1rem" }} />}
      {img !== "" && <img src={img} alt="Generated" />}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message="Please enter something"
      >
        <Alert severity="error">This is an error alert — check it out!</Alert>
      </Snackbar>
    </div>
  );
}

export default Main;
