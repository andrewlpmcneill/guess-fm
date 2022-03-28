import React from "react";

export default function Marker(props) {

  const { color, name, id } = props;

  return (

    // <div>
    //   <img className="marker" src={props.icon} alt=""/>
    //   <p>{props.text}</p>
    // </div>
    <div>
      {/* <div
        className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      /> */}
      <div className="pulse" />
    </div>


  )

}