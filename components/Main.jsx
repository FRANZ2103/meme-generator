import React from "react";
export default function Main() {
  const variable = 1;
  const [count, setCount] = React.useState(0);
  const [allMeme, setAllMeme] = React.useState([0]);
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value,
      };
    });
  }
  function Gennew(event) {
    setCount(Math.floor(Math.random() * 100));
    console.log(allMeme[count].name);
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(Math.floor(Math.random() * 100));
        setAllMeme(data.data.memes);
      });
  }, []);
  // test
  return (
    <main>
      <h1>{allMeme[count].name}</h1>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
          />
        </label>
        <button onClick={Gennew}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={allMeme[count].url} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
