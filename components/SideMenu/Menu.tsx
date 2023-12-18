/* 
Component for the full menu
*/
import "./Menu.css";
import React, { useState } from "react";
import { INPUT_MAX_LENGTH } from "@constants/input";
import Image from "next/image";
import WolfImage from "@assets/images/wolf.jpg";
import RavenImage from "@assets/images/raven.jpg";
import BearImage from "@assets/images/bear.jpg";

type Props = {
  setVideoText: (text: string) => void;
  setVideoColor: (color: string) => void;
  setVideoImage: (image: string) => void;
};

export const SideMenu: React.FC<Props> = ({
  setVideoText,
  setVideoColor,
  setVideoImage,
}) => {
  const [inputText, setInputText] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(0);
  const [inputColor, setInputColor] = useState<string>("#685e95");

  const [inputImage, setInputImage] = useState<string>("wolf");

  const updateText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
    setCharCount(event.target.value.length);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setVideoText(inputText);
    setVideoColor(inputColor);
    setVideoImage(inputImage);
  };

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputImage(event.target.value);
  };

  return (
    <div className="side-menu">
      <div className="side-menu__no-footer">
        <div className="side-menu__header">
          <h1>Futhark Videos</h1>
          <h2>Forge thy vidrønn in Elder Futhark script</h2>
        </div>
        <div className="side-menu__content">
          <div className="side-menu__content__item">
            <label htmlFor="video-text">
              What saga shall grace your vidrønn?
            </label>
            <div className="side-menu__content__item__textarea">
              <textarea
                id="video-text"
                placeholder="Inscribe your runes here"
                maxLength={INPUT_MAX_LENGTH}
                onChange={updateText}
                rows={4}
              />
              <p className="side-menu__content__item__length">
                {charCount}/{INPUT_MAX_LENGTH}
              </p>
            </div>
          </div>
          <div className="side-menu__content__item">
            <label htmlFor="video-color">Select a hue from the realm</label>
            <div className="side-menu__content__item__color">
              <input
                id="video-color"
                type="color"
                onChange={(event) => setInputColor(event.target.value)}
                value={inputColor}
              />
              <label
                htmlFor="video-color"
                className="side-menu__content__item__color__preview"
                style={{ backgroundColor: inputColor }}
              />
            </div>
          </div>
          <div className="side-menu__content__item">
            <label htmlFor="video-image">
              Choose an image from the tapestry
            </label>
            <div className="side-menu__content__item__image">
              <input
                className="side-menu__content__item__image__input"
                id="wolf"
                type="radio"
                name="image"
                value="wolf"
                checked={inputImage === "wolf"}
                onChange={selectImage}
              />
              <input
                className="side-menu__content__item__image__input"
                id="raven"
                type="radio"
                name="image"
                value="raven"
                checked={inputImage === "raven"}
                onChange={selectImage}
              />
              <input
                className="side-menu__content__item__image__input"
                id="bear"
                type="radio"
                name="image"
                value="bear"
                checked={inputImage === "bear"}
                onChange={selectImage}
              />
              <div style={{ fontSize: "0.8rem" }}>
                To see more images like these, check out the original
                artist&apos;s page at{" "}
                <a
                  href="https://valhyr.com/blogs/articles/viking-background-wallpapers"
                  target="_blank"
                  rel="noreferrer"
                >
                  Valhyr
                </a>
              </div>

              <div className="side-menu__content__item__image__preview">
                <label
                  htmlFor="wolf"
                  className={
                    inputImage === "wolf"
                      ? "side-menu__content__item__image__preview__selected"
                      : ""
                  }
                >
                  <Image src={WolfImage} alt="Wolf" width={100} height={100} />
                </label>
                <label
                  htmlFor="raven"
                  className={
                    inputImage === "raven"
                      ? "side-menu__content__item__image__preview__selected"
                      : ""
                  }
                >
                  <Image
                    src={RavenImage}
                    alt="raven"
                    width={100}
                    height={100}
                  />
                </label>
                <label
                  htmlFor="bear"
                  className={
                    inputImage === "bear"
                      ? "side-menu__content__item__image__preview__selected"
                      : ""
                  }
                >
                  <Image src={BearImage} alt="bear" width={100} height={100} />
                </label>
              </div>
            </div>
          </div>

          <div className="side-menu__content__item">
            <button
              className="side-menu__content__item__button"
              onClick={handleSubmit}
            >
              Saga update
            </button>
          </div>
        </div>
      </div>

      <div className="side-menu__footer">
        <div className="side-menu__footer__author">
          Made by{" "}
          <a
            href="https://github.com/Pheithar"
            target="_blank"
            rel="noreferrer"
          >
            Alejandro Valverde (Pheithar)
          </a>
        </div>
      </div>
    </div>
  );
};
