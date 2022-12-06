import { useState } from "react";
import style from "../styles/Landing.module.css";
import B6 from "./B6";

const Layer05 = ({changed, configuration}) => {
  const [index, setIndex] = useState(null);
  const [changedCurrent, setChanged] = useState(null);
  const colorArray = [
    "#f099cd",
    "#1d480f",
    "white",
    "#eb0000",
    "#50b8f9",
    "#ec4f27",
  ];

  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * colorArray.length)), setChanged(true);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length))
  }

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[index] }}
      onClick={changed && !changedCurrent ? () => changeIndex() : null}
      onContextMenu={changed && !changedCurrent ? () => changeColor() : null}
    >
      <B6 changed={changedCurrent} />
      <B6 changed={changedCurrent} />
    </div>
  );
};

export default Layer05;
