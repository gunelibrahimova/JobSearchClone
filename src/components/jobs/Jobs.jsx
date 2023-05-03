import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    border: "1px solid #AAF674",
    color: theme.palette.text.secondary,
}));

const Jobs = () => {

    const [data, setData] = useState("")
    const [query, setQuery] = useState("");


    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error))

    return (
        <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 635 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Sayt üzrə axtarış"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>

            </Paper>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={0}>
                    {
                        data &&
                        data.filter((e) => e.title.toLowerCase().includes(query)).map((dt) => (
                            <Item>
                                <h4 style={{ margin: "0" }}>{dt.title}</h4>
                                <span>{dt.company}</span>
                            </Item>
                        ))
                            

                        
                    }

                </Stack>
            </Box>
        </div>
    )
}

export default Jobs