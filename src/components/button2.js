import {useRef} from 'react';

let btnRef = useRef();

const onBtnClick = e => {
  if(btnRef.current){
    btnRef.current.setAttribute("disabled", "disabled");
  }
}

<button ref={btnRef} onClick={onBtnClick}>Send</button>