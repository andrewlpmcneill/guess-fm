import NorthIcon from "@mui/icons-material/North";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import EastIcon from "@mui/icons-material/East";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import SouthIcon from "@mui/icons-material/South";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import WestIcon from "@mui/icons-material/West";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import CelebrationIcon from "@mui/icons-material/Celebration";


//returns icon corresponding to the compass direction
const getDirectionIcon = (compassDirection) => {
  switch (compassDirection) {
    case "N":
      return <NorthIcon />;
    case "NNE":
    case "NE":
    case "ENE":
      return <NorthEastIcon />;
    case "E":
      return <EastIcon />;
    case "SSE":
    case "SE":
    case "ESE":
      return <SouthEastIcon />;
    case "S":
      return <SouthIcon />;
    case "W":
      return <WestIcon />;
    case "SSW":
    case "SW":
    case "WSW":
      return <SouthWestIcon />;
    case "NNW":
    case "NW":
    case "WNW":
      return <NorthWestIcon />;
    default:
      return <CelebrationIcon />;
  }
};

export default getDirectionIcon;
