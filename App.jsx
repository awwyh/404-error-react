import React from "react";
import "./App.css";
import HeartIcon from "./assets/Vector.svg";
import StarIcon from "./assets/star-fill.svg";
import EmojiIcon from "./assets/emoji-dizzy-fill.svg";

function App() {
  const decorations = Array.from({ length: 45 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const isStar = i % 2 === 0;
    const src = isStar ? StarIcon : EmojiIcon;
    const alt = isStar ? "star" : "emoji";
    const className = `decor ${isStar ? "star" : "emoji"}`;

    return (
      <img
        key={i}
        src={src}
        alt={alt}
        className={className}
        style={{ top: `${top}%`, left: `${left}%` }}
      />
    );
  });

  return (
    <div className="not-found">
      <img src={HeartIcon} alt="broken heart" className="heart-icon" />
      <div className="code">404</div>
      <p className="message">Извините, страница не найдена</p>
      <a href="/" className="home-button">Вернуться на главную</a>
      <div className="decorations">
        {decorations}
      </div>
    </div>
  );
}

export default App;