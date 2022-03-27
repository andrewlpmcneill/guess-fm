import AppBar from '@mui/material/AppBar';
import Box, { BoxProps }from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function NavBar(props) {

  const { isAboutOpen, setIsAboutOpen } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: '#20202a'}}>
        <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginRight: 2,
        }}>
          <Box component="img"
            sx={{
              height: 80,
              width: 215,
              maxHeight: { xs: 80, md: 80 },
              maxWidth: { xs: 215, md: 215 },
              mr: 2
              
            }}
            edge="start"
            aria-label="menu"
            src="https://i.postimg.cc/X774ff90/GUESS-FM-800-300-px.png">
          </Box>
          <Box>
            <Button sx={{fontSize: "24px"}} onClick={() => setIsAboutOpen(true)}>
              <InfoIcon sx={{color: "#c9333b"}} />
            </Button>
            <Button sx={{fontSize: "24px"}}>
              <BarChartIcon sx={{color: "#c9333b"}}/>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}