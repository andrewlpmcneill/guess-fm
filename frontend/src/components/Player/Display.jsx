import { useState, useEffect } from 'react';
import getRandomFrequency from '../../helpers/getRandomFrequency';
import Ticker from 'react-ticker';

export default function Display(props) {

  const { round } = props;
  const message = "YOU ARE NOW LISTENING TO 101.7 GUESS FM... ENJOY THE GAME!";
  const [text, setText] = useState(message);

  useEffect(() => {
    const newFrequency = getRandomFrequency();
    const newText = `YOU ARE NOW LISTENING TO ${newFrequency} GUESS FM...ENJOY ROUND ${round === 0 ? 1 : round}!`;
    setText(newText);
  }, [round])

  return (

    <Ticker speed={6} mode="smooth" offset="run-in">
        {({ index }) => (
          <>
            <p style={ {
              color: "#C9333B",
              // fontFamily: "Wild World",
              fontSize: "16px",
              whiteSpace: "nowrap"
            } }>
              {text ? text : "PLACEHOLDER"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            {/* <img src="www.my-image-source.com/" alt=""/> */}
          </>
        )}
    </Ticker>
      
  )

}