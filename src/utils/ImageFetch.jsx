import { useEffect, useState } from "react";

const ImageFetch = () => {
  const [imageURL, setImageURL] = useState(null);
  const [cardName, setCardName] = useState("");

  useEffect(() => {
    fetch("https://rws-deck.netlify.app/.netlify/functions/cards", {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        const card = data.cards[0];
        setImageURL(card.image);
        setCardName(card.name);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img className="card-img" src={imageURL} alt={cardName} />
      </>
    )
  );
};

export default ImageFetch;
