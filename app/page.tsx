"use client";
import { Gluten } from "next/font/google";
import Image from "next/image";

import { useState } from "react";
import styles from "./style.module.css";

const gluten = Gluten({
  weight: ["100", "900"],
  subsets: ["latin"],
});

type Card = {
  id: string;
  value: string;
  unbox: boolean;
  col: string;
};

export default function Home() {
  const [modal, setModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Card>();
  const [card, setCard] = useState<Card[]>([
    {
      id: "1",
      value: "100 USD",
      unbox: false,
      col: "2",
    },
    {
      id: "2",
      value: "100 d",
      unbox: false,
      col: "3",
    },
    {
      id: "3",
      value: "200 do",
      unbox: false,
      col: "4",
    },
    {
      id: "4",
      value: "120 do",
      unbox: false,
      col: "2",
    },
    {
      id: "5",
      value: "120 do",
      unbox: false,
      col: "3",
    },
    {
      id: "6",
      value: "120 do",
      unbox: false,
      col: "4",
    },
  ]);
  const onClick = (e: React.MouseEvent<HTMLElement>, item: Card) => {
    if (item.unbox) {
      return;
    }

    // const id = (e.target as HTMLButtonElement).id;
    setCurrentItem(item);
    setModalOpen(true);
  };

  const handleModal = (item: Card) => {
    setModalOpen(false);
    const tempData = [...card];
    tempData[parseInt(item.id) - 1].unbox = true;
    setCard(tempData);
  };

  return (
    <main className={gluten.className}>
      {/* CARDS */}
      <div
        style={{
          backgroundImage: "linear-gradient(180deg, #f8c7a5, #e17b71)",
          zIndex: "1",
        }}
        className={`h-screen items-center justify-center grid grid-cols-5 relative opacity-70 ${
          styles.background
        } ${modal ? `${styles.blur}` : ``}`}
      >
        {card.map((element) => {
          const col = element.col;
          const colStart = "col-start-" + col;
          console.log(colStart);

          return (
            <div
              key={element.id}
              className={`${colStart} ${styles.card}`}
              onClick={(event) => onClick(event, element)}
            >
              <Image
                fill={true}
                id={element.id}
                className={`text-2xl ${styles.cardImage} `}
                src={element.unbox ? `/cat image.jpg` : `/rong vang.jpg`}
                alt="Picture of the author"
              ></Image>
            </div>
          );
        })}
        {/* <>
          <div
            // key={element.id}
            className={`col-start-2 ${styles.card}`}
            // onClick={(event) => onClick(event, element)}
          >
            <Image
              fill={true}
              // id={element.id}
              className={`text-2xl ${styles.cardImage} `}
              src={`/rong vang.jpg`}
              alt="Picture of the author"
            ></Image>
          </div>
          <div
            // key={element.id}
            className={`col-start-3 ${styles.card}`}
            // onClick={(event) => onClick(event, element)}
          >
            <Image
              fill={true}
              // id={element.id}
              className={`text-2xl ${styles.cardImage} `}
              src={`/rong vang.jpg`}
              alt="Picture of the author"
            ></Image>
          </div>
          <div
            // key={element.id}
            className={`col-start-4 ${styles.card}`}
            // onClick={(event) => onClick(event, element)}
          >
            <Image
              fill={true}
              // id={element.id}
              className={`text-2xl ${styles.cardImage} `}
              src={`/rong vang.jpg`}
              alt="Picture of the author"
            ></Image>
          </div>
          <div
            // key={element.id}
            className={`col-start-2 ${styles.card}`}
            // onClick={(event) => onClick(event, element)}
          >
            <Image
              fill={true}
              // id={element.id}
              className={`text-2xl ${styles.cardImage} `}
              src={`/rong vang.jpg`}
              alt="Picture of the author"
            ></Image>
          </div>
          <div
            // key={element.id}
            className={`col-start-3 ${styles.card}`}
            // onClick={(event) => onClick(event, element)}
          >
            <Image
              fill={true}
              // id={element.id}
              className={`text-2xl ${styles.cardImage} `}
              src={`/rong vang.jpg`}
              alt="Picture of the author"
            ></Image>
          </div>
          <div
            // key={element.id}
            className={`col-start-4 ${styles.card}`}
            // onClick={(event) => onClick(event, element)}
          >
            <Image
              fill={true}
              // id={element.id}
              className={`text-2xl ${styles.cardImage} `}
              src={`/rong vang.jpg`}
              alt="Picture of the author"
            ></Image>
          </div>
        </> */}
      </div>

      {/* MODAL */}
      <div
        className={`fixed top-[40%] left-1/2 mt-[-200px] ml-[-200px] w-[400px] h-[400px] 
        ${styles.modal}
        ${modal ? styles.modalOpen : ``}`}
      >
        <p
          className={`text-3xl text-black font-semibold absolute left-1/3 ${
            styles.congratText
          } ${modal ? styles.congratTextShow : ``}`}
        >
          {currentItem == null ? "" : currentItem.value}
        </p>

        <Image
          // fill={true}
          width={400}
          height={400}
          className={`rounded-2xl absolute `}
          style={{
            boxShadow: "30px 30px 30px rgba(0, 0, 0, 0.4)",
            flex: "1",

            zIndex: "1",
          }}
          src="/center card.jpg"
          alt="Picture of the author"
        ></Image>
      </div>
      <div
        style={{ zIndex: "3", width: "200px" }}
        className={`fixed bottom-[15%] left-1/2 ml-[-100px] text-center ${
          styles.buttonAccept
        } ${modal ? styles.buttonAcceptShow : ``}`}
      >
        <button
          className=""
          onClick={() => {
            handleModal(currentItem as Card);
          }}
        >
          Tặng lì xi!!!
        </button>
      </div>
    </main>
  );
}
