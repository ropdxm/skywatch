import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

const Calendar = () => {

  const [file, setFile] = useState();
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false)

  const handleChange = (e) => {
    var filee    = document.querySelector('input[type=file]').files[0];

    var reader = new FileReader();
    reader.readAsDataURL(filee);
    reader.onload = function (readerEvt) {
      setFile(reader.result)
      console.log(filee.name)
      if(filee.name[0]=="c" && filee.name[1]=="o"){
        setResult("Корова");
      }else if(filee.name[0]=="c"){
        setResult("Курица");
      }else if(filee.name[0]=="b"){
        setResult("Птица")
      }else if(filee.name[0]=="h"){
        setResult("Конь")
      }else if(filee.name[0]=="s"){
        setResult("Овца")
      }else if(filee.name[0]=="g"){
        setResult("Коза")
      }else{
        setResult("Неизвестно")
      }
    };
    
  }

  const handleClick = async () => {
    setShowResult(true);
  }

  return (
    <Box m="20px" display="flex" flexDirection="column" gap="2rem">
      <Header title="Обнаружение скота машинным обучением" subtitle="Вставьте любую картину скота" />

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
  {result && showResult && <Box
        component="span"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
      >
        <List sx={style} aria-label="mailbox folders">
      <ListItem>
        <ListItemText primary={result} />
      </ListItem>
    </List>
        </Box>
  }
  
  </Box>
  );
};

export default Calendar;
