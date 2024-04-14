import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const Bar = () => {

  const [file, setFile] = useState();
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    var filee    = document.querySelector('input[type=file]').files[0];

    var reader = new FileReader();
    reader.readAsDataURL(filee);
    reader.onload = function () {
      // setFile({"file": reader.result, name: filee});
      setFile(reader.result)
    };
    
  }

  const handleClick = async () => {

  }

  return (
    <Box m="20px" display="flex" flexDirection="column" gap="2rem">
      <TextField type="file" onChange={handleChange} />
      <Button variant="contained" color="primary" component="span" onClick={handleClick}>
        Upload
      </Button>
      {file && <Box
  component="img"
  sx={{
    height: 233,
    width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="ASNJDFBJASDBFBHJDJH"
  src={file}
/>
}
    </Box>
  );
};

export default Bar;
