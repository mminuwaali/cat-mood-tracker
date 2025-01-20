"use client";
import "./style.scss";
import Image from "next/image";
import { catFaceBgImg, catFaceImg } from "@/constants/media";
import { useHistoryContext } from "@/providers/history.provider";

export default function Right() {
  const { history } = useHistoryContext();

  return (
    <div className="right">
      <header className="right__header">
        <h3 className="right__header__title">
          <Image
            alt=""
            width={1000}
            height={1000}
            src={catFaceImg}
            className="right__header__title__image"
          />
          <p className="right__header__title__content">
            Cat mood tracker
            <sup>TM</sup>
          </p>
        </h3>
        <span className="right__header__description">mood history</span>
      </header>

      <div className="right__list">
        {history.map((item) => (
          <div
            key={item.createdAt}
            className="right__list__card"
            style={{ borderColor: item.color }}
          >
            <div
              className="right__list__card__icon"
              style={{ borderColor: item.color }}
            >
              <Image
                alt=""
                width={1000}
                height={1000}
                src={item.icon}
                className="right__list__card__icon__image"
              />
            </div>

            <div className="right__list__card__details">
              <h4
                className="right__list__card__details__description"
                style={{ color: item.color }}
              >
                {item.description}
              </h4>

              <p className="right__list__card__details__datetime">
                {new Date(item.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                /{" "}
                {new Date(item.createdAt).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            <Image
              alt=""
              width={1000}
              height={1000}
              src={catFaceBgImg}
              className="right__list__card__bg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
