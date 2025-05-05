import { TextField } from "@mui/material";
import { useState } from "react";
import {Box} from "@mui/system";
import Slider from "@mui/material/Slider";

export default function Form() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(50);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const changeVolume = (e) => {
        setVolume(e.target.value);
    }
    return( 
        <Box sx={{border: '1px solid red', p: 2}}>
            <TextField id="outlined-basic" label="PuppyName" variant="outlined" placeholder="Fido" 
            value={name}
            onChange={updateName} />

            <h2> Volume: {volume}</h2>
            <Slider aria-label="Volume"
                value={volume}
                onChange={changeVolume}/>
        </Box>
    )
}