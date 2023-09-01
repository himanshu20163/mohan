import React, { useContext, useState, useEffect } from 'react';
import myContext from './Mycontext';
import play from "./play-icon.png";
import pause from "./pause-icon.png"

const Musicsong = () => {
  const arrayOfObjects = useContext(myContext);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    if (currentSong) {
      currentSong.addEventListener('ended', () => {
        setCurrentSong(null);
      });
    }
  }, [currentSong]);

  function playsong(audiosong) {
    if (currentSong) {
      currentSong.pause();
      setCurrentSong(null);
    }

    const audioEl = new Audio(audiosong);
    audioEl.play();
    setCurrentSong(audioEl);
  }

  function pausesong() {
    if (currentSong) {
      currentSong.pause();
      setCurrentSong(null);
    }
  }

  return (
    <div>
      {arrayOfObjects.map((item, index) => (
        <div key={item.songname}>
          <div>{item.songname}</div>
          <span key={item.songname}>
            {currentSong && currentSong.src === item.audiosong ? (
              <img src={pause} height="50" width="50" onClick={pausesong} />
            ) : (
              <img src={play} height="50" width="50" onClick={() => playsong(item.audiosong)} />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Musicsong;
