/* Коли глядачі аплодуватимуть, 
у компонента Matador зміняться props, 
а саме поле applause (number). 
Видів оплесків — 4 шт (значення від 0 до 3). 
На оплески компонент потрібно перерендерити, 
але тільки якщо вид оплесків = 3. 
Якщо двічі поспіль вид оплесків = 3, 
то компонент не потрібно ререндерити, 
тобто потрібно запамʼятовувати які оплески 
були минулого разу (в state вашого компонента).*/
import React, { useEffect, useState, useMemo } from "react";
import ArenaWithBull from "./ArenaWithBull";
import { IMatadorProps } from "../interfaces/MatatorTypes";
import applause0 from "../assets/applause3.mp3";
import applause1 from "../assets/applause1.mp3";
import applause2 from "../assets/applause2.mp3";
import applause3 from "../assets/applause3.mp3";

import "./matador.css";
const Matador = React.memo(
  ({ applause, setMatarodPosition, matadorPosition }: IMatadorProps) => {
    const [prevApplause, setPrevApplause] = useState(applause);
    useEffect(() => {
      const handleBullRun = (e: any) => {
        if (e.detail.position === matadorPosition) {
          const newMatadorPosition = Math.floor(Math.random() * 8);
          setMatarodPosition(newMatadorPosition);
          console.log(
            `Matador is moving from ${matadorPosition} to ${newMatadorPosition}`
          );
        }
      };

      document.addEventListener("bullRun", handleBullRun);

      return () => {
        document.removeEventListener("bullRun", handleBullRun);
      };
    }, [matadorPosition]);
    let rerenderAplause = 0;

    useEffect(() => {
      setPrevApplause(applause);
      if (applause === 3 && prevApplause !== 3) {
        rerenderAplause = applause;
      }
    }, [rerenderAplause]);

    return (
      <div>
        I am matador
        {applause == 0 && (
          <audio src={applause0} controls={true} autoPlay={true} />
        )}
        {applause == 1 && (
          <audio src={applause1} controls={true} autoPlay={true} />
        )}
        {applause == 2 && (
          <audio src={applause2} controls={true} autoPlay={true} />
        )}
        {applause == 3 && (
          <audio src={applause3} controls={true} autoPlay={true} />
        )}
      </div>
    );
  }
);

export default Matador;
