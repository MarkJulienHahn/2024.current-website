import { useState, useEffect } from "react";
import styles from "../styles/Beteiligte.module.css";

import Entry from "./Entry";

const Beteiligte = ({ english, beteiligte, active }) => {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    active && setIndex(active.active);
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* LINKE SEITE */}

      <div className={styles.names}>
        {beteiligte.map((beteiligter, i) => (
          <div
            key={i}
            className={`${styles.nameRow} ${i % 2 == 0 && styles.nameRowGrey} ${
              beteiligter.different && styles.nameRowGreen
            }`}
            style={
              index == i
                ? beteiligter.different
                  ? { background: "var(--green)" }
                  : { background: "var(--blue)" }
                : { background: "" }
            }
            // style={
            //   i % 2 == 0 ? { background: "white" } : { background: "#F2F2F2" }
            // }
            onClick={() => setIndex(i)}
          >
            <h2>{beteiligter.name}</h2>
          </div>
        ))}
      </div>

      {/* RECHTE SEITE */}

      {index == null ? (
        <div className={styles.header}>
          {english ? (
            <p>
              In close collaboration with the city, local initiatives and
              institutions come together and shape the program through
              independent formats such as workshops, discussions, artistic
              endeavors, and research work.
            </p>
          ) : (
            <p>
              In engem Austausch mit der Stadt, docken lokale Initiativen und
              Institutionen an und gestalten das Programm in eigenständigen
              Formaten wie Workshops, Gesprächen, künstlerischen und forschenden
              Arbeiten mit.
            </p>
          )}
        </div>
      ) : (
        <div className={styles.content}>
          <Entry english={english} beteiligter={beteiligte[index]} />
        </div>
      )}
    </div>
  );
};

export default Beteiligte;
