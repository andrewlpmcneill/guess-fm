import Dialog from "@mui/material/Dialog";
import { styled } from '@mui/material/styles';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { IconButton, Radio } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { Link } from "@mui/material";
import { CardContent } from "@mui/material";
import { ThemeProvider } from "@mui/private-theming";

const AboutDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root:first-of-type': {
    backgroundColor: '#20202a',
    borderRadius: "15px",
    border: "1px solid #4D4D75",
  },
  a: {
    color: "#c9333b",
    textDecoration: "none",
    cursor: "pointer",
    '&:hover': {
      color: "#AB151D",
    }
  },
}));

export default function About(props) {
  // Props passed in to render Dialog box
  const { isAboutOpen, setIsAboutOpen, theme } = props

  return (
    <div class="about">
        <AboutDialog open={isAboutOpen} fullWidth>
          <IconButton
            aria-label="close"
            onClick={() => setIsAboutOpen(false)}
            sx={{
              position: 'absolute',
              left: 8,
              top: 8,
              color: "#AB151D",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogTitle sx={{ m: "auto", p: 2, 
          textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b", letterSpacing: "2px" }}>
            {"GUESS FM"}
          </DialogTitle>
          {/* Add margin around content */}
          <DialogContent sx={{ m: "auto", p: 2, textAlign: "center" }}>
            <Typography sx={{letterSpacing: "0.2px", p: 2}}>
              {"Guess FM was built with the help of the  "}<Link href="http://radio.garden/" >{"Radio Garden"}</Link>
              {" "}<Link href="https://jonasrmichel.github.io/radio-garden-openapi/">{"API"}</Link>{"."}
            </Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Box>
                <Card sx={{ m: "auto", p: 2, textAlign: "center", border: "none!important", boxShadow: "none", fontSize: "18px" }}>
                  <CardContent sx={{
                      color: 'white'
                    }}>
                    <Typography sx={{fontSize: "24px", fontWeight: 600,}}>
                      {"11,937"}
                    </Typography>
                    <Typography sx={{fontSize: "18px", fontWeight: 300,}}>
                      {"CITIES"}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card sx={{ m: "auto", p: 2, textAlign: "center", border: "none!important", boxShadow: "none" }}>
                  <CardContent sx={{
                      color: 'white',
                    }}>
                    <Typography sx={{letterSpacing: "0.2px", fontSize: "24px", fontWeight: 600}}>
                      {"174"}
                    </Typography>
                    <Typography sx={{letterSpacing: "0.2px", fontSize: "18px", fontWeight: 300}}>
                      {"COUNTRIES"}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card sx={{ m: "auto", p: 2, textAlign: "center", border: "none!important", boxShadow: "none" }}>
                  <CardContent sx={{
                      color: 'white',
                    }}>
                    <Typography sx={{letterSpacing: "0.2px", fontSize: "24px", fontWeight: 600,}}>
                      {"36,002"}
                    </Typography>
                    <Typography sx={{letterSpacing: "0.2px", fontSize: "18px", fontWeight: 300}}>
                      {"STATIONS"}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Typography sx={{ m: "auto", paddingBottom: 2, textAlign: "center", fontSize: "12px" }}>
              {"Guess FM was built by "}<Link href="https://github.com/andrewlpmcneill" >{"Andrew McNeill"}</Link>
              {", "}<Link href="https://github.com/ryjcm1">{"Jimmy Chuk"}</Link>{", and "}
              <Link href="https://github.com/seamusmcgill">{"Seamus McGill"}</Link>{"."}
            </Typography>
          </DialogContent>
        </AboutDialog>
    </div>
  );
}
