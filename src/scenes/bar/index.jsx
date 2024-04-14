import { Box, TextField, Button } from "@mui/material";
import { useRef, useState } from "react";

const Bar = () => {

  const [file, setFile] = useState();
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    var filee    = document.querySelector('input[type=file]').files[0];

    var reader = new FileReader();
    reader.readAsDataURL(filee);
    reader.onload = function () {
      // setFile({"file": reader.result, name: filee});
      setFile("SADFKNFSNA")
    };
    
  }

  const handleClick = async () => {
    if(!file){
      alert("Please select a file");
      return;
    }
    // http://127.0.0.1:8000/disease

    const formData = new FormData();
    formData.append("file", file);
    console.log(formData)

    try {
      const response = await fetch("http://127.0.0.1:8000/disease", {
        method: "POST",
        body: JSON.stringify(formData)
      
      });
      const data = await response.json();
      setResult(data);
      console.log(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }


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
