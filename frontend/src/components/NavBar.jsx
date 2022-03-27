import AppBar from '@mui/material/AppBar';
import Box, { BoxProps }from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';
import InfoIcon from '@mui/icons-material/Info';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function NavBar(props) {
  const { isAuthenticated } = useAuth0();

  const { isAboutOpen, setIsAboutOpen, isStatsOpen, setIsStatsOpen } = props;

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
            <Button sx={{fontSize: "24px"}} onClick={() => setIsStatsOpen(true)}>
              <BarChartIcon sx={{color: "#c9333b"}}/>
            </Button>
            {!isAuthenticated ?
             <LoginButton>
              LOGIN
            </LoginButton> :
            <LogoutButton>
              LOGOUT
            </LogoutButton>}
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}