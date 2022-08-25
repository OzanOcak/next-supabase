import { useState } from "react";

const Button = (props) => {
  const [numberOfClick, setNumberOfClick] = useState(0);
  const handleClick = () => {
    setNumberOfClick(numberOfClick + 1);
    props.func();
  };
  return (
    <>
      <button onClick={handleClick}>{props.title}</button>
      <span>{numberOfClick}</span>
    </>
  );
};
export default Button;
