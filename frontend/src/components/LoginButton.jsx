import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import useGameData from '../hooks/useGameData';

export default function LoginButton(props) {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button variant="contained" sx={{fontFamily: 'Wild World'}}
      onClick={() => {
        loginWithRedirect()
      }}
    >
      {props.children}
    </Button>
  );
};
