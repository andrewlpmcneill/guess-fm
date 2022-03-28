import { useState, useEffect } from 'react';
import Ticker from 'react-ticker';

export default function Display(props) {

  // const {  } = props;
  const message = "YOU ARE NOW LISTENING TO 101.7 GUESS FM";

  // useEffect(() => {

  // })

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
              {message}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            {/* <img src="www.my-image-source.com/" alt=""/> */}
          </>
        )}
    </Ticker>
      
  )

}