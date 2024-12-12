import './Home.css'
import { Card, ThemeProvider } from "@mui/material"
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useState } from 'react'
import CustomTabPanel from '../CustomTabPanel/CustomTabPanel';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import WhatIDo from './WhatIDo/WhatIDo'
import WhatILove from './WhatILove/WhatILove'
import WhatImLearning from './WhatImLearning/WhatImLearning'

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Home(){
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //TODO: add what i do / what i love / what i'm learning tabs
    return(
        <ThemeProvider theme={theme}>
        <div>
            <div className='intro'>
                <h1>
                    Aoife McCullough is a software engineer.
                </h1>
            </div>
            <div className='mainContainer'>
            <Box sx={{ width: '100%', marginTop: '1%'}}>
                <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <Tabs 
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                
                TabIndicatorProps={{sx: { bgcolor: "#FF9B54"}, }}
                centered
                sx = {{
                    "& button": {color: '#E0E4E8'},
                    "& button:focus": {color: '#FF9B54'},
                    "& button.Mui-selected": {color: '#FF9B54'},
                    "& MuiTabs-indicator": {backgroundColor: '#FF9B54'},
                }}>
                    <Tab label="What I Do" {...a11yProps(0)}/>
                    <Tab label="What I Love" sx={{color: 'text.lightgrey'}} {...a11yProps(1)} />
                    <Tab label="What I'm Learning" {...a11yProps(2)} />
                </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <WhatIDo />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <WhatILove />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <WhatImLearning />
                </CustomTabPanel>
            </Box>
            </div>
        </div>
        </ThemeProvider>
        
    )
}

export default Home