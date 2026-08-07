import React from "react";
export default function Main() {
  const variable = 1;
  const [count, setCount] = React.useState(0);
  const [meme, setMeme] = React.useState([0]);
  function handleChange(event) {
    setCount((prevCount) => prevCount + 1);
    console.log(meme[count].name);
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeme(data.data.memes);
      });
  }, [variable]);
  return (
    <main>
      <h1>{meme[count].name}</h1>
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
        <button onClick={handleChange}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme[count].url} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
