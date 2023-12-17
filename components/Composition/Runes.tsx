import React from "react";
import { AbsoluteFill, useCurrentFrame, Img, staticFile } from "remotion";
import "./Runes.css";

type Props = {
  inputText: string;
  inputColor: string;
  inputImage: string;
};

interface Runes {
  [key: string]: string;
}

const letter2Rune = (text: string) => {
  const runes: Runes = {
    a: "ᚨ",
    b: "ᛒ",
    c: "ᚲ",
    d: "ᛞ",
    e: "ᛖ",
    f: "ᚠ",
    g: "ᚷ",
    h: "ᚺ",
    i: "ᛁ",
    j: "ᛃ",
    k: "ᚲ",
    l: "ᛚ",
    m: "ᛗ",
    n: "ᚾ",
    o: "ᛟ",
    p: "ᛈ",
    q: "ᚲ",
    r: "ᚱ",
    s: "ᛊ",
    t: "ᛏ",
    u: "ᚢ",
    v: "ᚢ",
    w: "ᚹ",
    x: "ᚲᛊ",
    y: "ᛁ",
    z: "ᛉ",
  };

  return text
    .split("")
    .map((letter) => {
      return runes[letter.toLowerCase()] || letter;
    })
    .join("");
};

const hex2rgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
};

const font_white_or_black = (hex: string) => {
  const { r, g, b } = hex2rgb(hex);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
};

export const RunesComposition: React.FC<Props> = ({
  inputText,
  inputColor,
  inputImage,
}) => {
  // Array of texts translated to runes
  const texts: string[] = letter2Rune(inputText).split(" ");

  // Each word will appear 30 frames after the previous one
  const frame: number = useCurrentFrame();

  const opacities: string[] = texts.map((_, index) => {
    return `${Math.max(Math.min(1, (frame - index * 30) / 60), 0)}`;
  });

  const opacity = Math.min(1, frame / 60);
  return (
    <AbsoluteFill className="runes" style={{ backgroundColor: inputColor }}>
      <AbsoluteFill>
        <Img
          className="runes__background"
          src={staticFile(`images/${inputImage}.jpg`)}
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <div className="runes__text" style={{ opacity }}>
          {texts.map((text, index) => (
            <span
              key={text + index}
              className="runes__text__word"
              style={{
                opacity: opacities[index],
                color: font_white_or_black(inputColor),
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
