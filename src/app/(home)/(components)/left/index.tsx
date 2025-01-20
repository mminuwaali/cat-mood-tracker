"use client";
import "./style.scss";
import React from "react";
import Image from "next/image";
import { moods } from "@/constants/settings";
import { catFaceImg } from "@/constants/media";
import { useHistoryContext } from "@/providers/history.provider";

export default function Left() {
  const { addEntry } = useHistoryContext();
  const [item, setItem] = React.useState<string>("");

  const handleClick = (arg: Omit<HistoryType, "createdAt">) => {
    setItem(arg.name);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setItem("");

    const mood = moods.find((mood) => mood.name === item);
    addEntry(mood!);
  };

  return (
    <form onSubmit={handleSubmit} className="left">
      <header className="left__header">
        <Image
          alt="Cat face"
          width={1000}
          height={1000}
          src={catFaceImg}
          className="left__header__img"
        />
        <h3 className="left__header__title">
          What is your cat&#39;s current mood?
        </h3>
      </header>

      <div className="left__icons">
        {moods.map((mood) => (
          <div
            key={mood.name}
            onClick={() => handleClick(mood)}
            className={`left__icons__icon ${
              item === mood.name && "left__icons__icon--selected"
            }`}
          >
            <Image
              width={1000}
              height={1000}
              src={mood.icon}
              alt={`${mood.name} icon`}
              className="left__icons__icon__img"
            />
          </div>
        ))}
      </div>

      {item && (
        <span
          className="left__title"
          style={{ color: moods.find((mood) => mood.name === item)?.color }}
        >
          {moods.find((mood) => mood.name === item)?.description}
        </span>
      )}

      <footer className="left__footer">
        <button disabled={!item} className="left__footer__button">
          Save mood
        </button>
      </footer>
    </form>
  );
}
