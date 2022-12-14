import { useState, useEffect } from "react";
import style from "../../styles/Landing.module.css";
import A4 from "../animation/A4";

const A3 = ({ indexA2, changedA2, colorArray }) => {
  const [indexA3, setIndexA3] = useState(null);
  const [changedA3, setChangedA3] = useState(null);

  const changeIndex = () => {
    if (indexA2 +1 < colorArray.length) 

    {setIndexA3(indexA2 + 1), setChangedA3(true)}
    else setIndexA3(0);
  };

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorArray.length));
  };

  // useEffect(() => {
  //   if (changedA2 && !changedA3) {
  //     setChangedA3(true)
  //   }
  // })

  return (
    <div
      className={style.horizontal}
      style={{ background: colorArray[indexA3]}}
      onClick={changedA2 && !changedA3 ? () => changeIndex() : null}
      // onMouseEnter={changedCurrent ? () => changeColor() : null}
    >
      <A4 colorArray={colorArray} changedA3={changedA2} indexA3={indexA3}/>
      <A4 colorArray={colorArray} changedA3={changedA2} indexA3={indexA3}/>
    </div>
  );
};

export default A3;
