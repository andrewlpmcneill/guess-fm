import React from "react";

export default function Marker(props) {

  return (

    <div>
      <img className="marker" src={props.icon}/>
      <p>{props.text}</p>
    </div>

  )

}