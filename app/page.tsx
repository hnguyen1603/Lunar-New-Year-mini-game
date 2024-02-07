"use client";
import { Gluten } from "next/font/google";
import Image from "next/image";

import { Card } from "antd";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
const { Meta } = Card;
const gluten = Gluten({
  weight: ["100", "900"],
  subsets: ["latin"],
});
type Card = {
  id: string;
  value: string;
  unbox: boolean
};


export default function Home() {
  const [id, setId] = useState("");
  const [reveal, setReveal] = useState(false);
  const [card, setCard] = useState<Card[]>([
    {
      id: "1",
      value: "100 d",
      unbox: false
    },
    {
      id: "2",
      value: "100 d",
      unbox: false
    },
    {
      id: "3",
      value: "200 do",
      unbox: false
    },
    {
      id: "4",
      value: "120 do",
      unbox: false
    },
    {
      id: "5",
      value: "120 do",
      unbox: false
    },
    {
      id: "6",
      value: "120 do",
      unbox: false
    },
  ])
  const onClick = (e: React.MouseEvent<HTMLElement>, item: Card) => {
    if (item.unbox) {
      return;
    }
    const id = (e.target as HTMLButtonElement).id;
    // console.log(id);
    const tempData = [...card];
    console.log("id",parseInt(id));
    console.log("run",tempData[parseInt(id) - 1]);

    tempData[parseInt(id) - 1].unbox = true;
    setCard(tempData);
    setReveal(true);
    // console.log((e.target as HTMLButtonElement).id, item);
  };
 
  return (
    <main
      style={{
        backgroundImage: "linear-gradient(180deg, #f8c7a5, #e17b71)",
        opacity: "0.7",
        zIndex: "1",
      }}
      className={`h-screen flex items-center justify-center ${gluten.className}`}
    >
      <div className=" grid grid-cols-3 justify-items-center relative ">
        <div
          style={
            reveal
              ? {
                  transform: "rotateY(180deg)",
                  transformStyle: "preserve-3d",
                  transition: "visibility, opacity 0.6s, transform 1s 1.2s",
                  backgroundImage: "none",
                  transitionTimingFunction:
                    " cubic-bezier(.175, .885, .32, 1.275)",
                  zIndex: "3",
                }
              : {}
          }
          className={`fixed bottom-1/4 m-4 w-[400px] h-[400px] flex items-center ${
            reveal ? `visible ` : `invisible opacity-0`
          }`}
        >
          <p
            className={`text-4xl text-black font-semibold absolute inset-y-1/4 ${
              styles.congratText
            } ${reveal ? styles.congratTextShow : ``}`}
          >

            500 dong
          </p>
          <button
            className={`${styles.buttonAccept} ${
              reveal ? styles.buttonAcceptShow : ``
            }`}
            onClick = {() => {
              setReveal(false);
            }}
          >
           Bạn có hài lòng không?
          </button>
          <Image
          
            fill={true}
            className={`rounded-2xl absolute`}
            style={{
              boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.4)",
              flex: "1",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              zIndex: "1",
            }}
            src="/center card.jpg"
            alt="Picture of the author"
          ></Image>

          <Image
            fill={true}
            className={`rounded-2xl`}
            style={{
              boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.4)",
              flex: "1",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              zIndex: "1",
            }}
            src="/rong vang.jpg"
            alt="Picture of the author"
          ></Image>
        </div>

        <div
          className={`${styles.card}`}
          onClick={(event) => onClick(event, card[0])}
        >
          {" "}
          <div id="1" className={` ${styles.rotate3DRightF}`}>
            <p className={`${styles.innerText}`}>Thử vận may</p>
            <Image

              fill={true}
              id="1"
              className={`text-2xl ${styles.cardImage} `}
              src="/rong vang.jpg"
              alt="Picture of the author"
            ></Image>
          </div>
          <div id="1" className={` ${styles.rotate3DRightB}`}>
            <p className={`${styles.innerText} `}>Cùng bốc nào!</p>
          </div>
          
        </div>
        <div
          className={`${styles.card} ${styles.scale}`}
          onClick={(event) => onClick(event, card[1])}
        >
          <Image
            fill={true}
            id={card[1].id}
            className={`${styles.cardImage} ${styles.scaleF}`}
            src="/rong vang.jpg"
            alt="Picture of the author"
          ></Image>
          <p className={`${styles.scaleB}`}>Mời bạn</p>
        </div>
        <div
          className={`${styles.card} ${styles.rotateX3}`}
          onClick={(event) => onClick(event, card[2])}
        >
          <Image
            fill={true}
            id={card[2].id}
            className={`${styles.cardImage} ${styles.rotateXF3}`}
            src="/rong vang.jpg"
            alt="Picture of the author"
          ></Image>
          <Image
            fill={true}
            id={card[2].id}
            className={`${styles.cardImage} ${styles.rotateXB3}`}
            src="/cat image.jpg"
            alt="Picture of the author"
          ></Image>
        </div>

        <div
          className={`${styles.card} ${styles.rotateInfinite}`}
          onClick={(event) => onClick(event, card[3])}
        >
          <Image
            fill={true}
            id={card[3].id}
            className={`${styles.cardImage}  `}
            style={{ zIndex: "1" }}
            src="/rong vang.jpg"
            alt="Picture of the author"
          ></Image>
          <p className={`${styles.showText}`}>Tiền đêiii</p>
        </div>
        <div
          className={`${styles.card}`}
          onClick={(event) => onClick(event, card[4])}
        >
          <Image
            fill={true}
            id={card[4].id}
            className={`${styles.cardImage} ${styles.rotate360}`}
            src="/rong vang.jpg"
            alt="Picture of the author"
          ></Image>
         
          <div className={styles.test}>
            
            <p className={`${styles.rotateText}`}>Lì xì nè!!!</p>
          </div>
        </div>
        <div
        
          className={`${styles.card} ${styles.rotateX}`}
          onClick={(event) => onClick(event, card[5])}
        >
         
         <Image
            fill={true}
            id={card[5].id}
            className={`${styles.cardImage} ${styles.rotateXF}`}
            src="/rong vang.jpg"
            alt="Picture of the author"
          ></Image>
          <div id = "6" className={styles.rotateXB}> 
            <p  className={`${styles.showText}`}>Lì xì nè!!!</p>
           
          </div>
        </div>
      </div>
    </main>
  );
}
