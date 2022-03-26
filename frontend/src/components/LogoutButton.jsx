import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';

export default function LogoutButton(props) {
  const { logout } = useAuth0();
  return (
    <Button
    sx={{fontFamily: 'Wild World', color: "#c9333b"}}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      {props.children}
    </Button>
  );
};