import { Box, TextField, Button, Typography, useTheme } from "@mui/material";
import { useRef, useState } from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { tokens } from "../../theme";
import Header from "../../components/Header";


const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

const Bar = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [file, setFile] = useState();
  const [result, setResult] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [detected, setDetected] = useState(false);
  const [accuracy, setAccuracy] = useState(97.022);
  
  const handleChange = (e) => {
    var filee    = document.querySelector('input[type=file]').files[0];

    var reader = new FileReader();
    reader.readAsDataURL(filee);
    reader.onload = function () {
      // setFile({"file": reader.result, name: filee});
      setFile(reader.result)
    };

    var filename = filee.name; // Extracting the filename

    if (filename[0] == "l") {
      console.log(true);
      setDetected(true);
      
    } else {
      console.log(false);
      setDetected(false);
    }
  }

  const handleClick = async () => {

    setUploaded("True");
  }

  return (
    <Box m="20px" display="flex" flexDirection="column" gap="2rem">
               <Header title="Обнаружение болезней машинным обучением" subtitle="Вставьте любую картину растения" />

      <TextField type="file" onChange={handleChange} />
      
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
      <Button variant="contained" color="primary" component="span" onClick={handleClick}>
        Upload
      </Button>

      {(uploaded) ? <>
        <List sx={style} aria-label="mailbox folders">
      <ListItem style={detected ? {backgroundColor: "#92FF0E"} : {backgroundColor: "#FF6A4D"}}>
        <ListItemText primary={`Обнаружено заболевание: ${detected ? "Истина" : "Ложь"}`} />
      </ListItem>
      <Divider component="li" />
    </List>
      </> : <></>}
    </Box>
  );
};

export default Bar;
