import React from 'react';

function Header(props){
  return (
    <div>
      <img src={props.profileImg}/>
      <h2>{props.username}</h2>
    </div>
  );
}

export default Header;