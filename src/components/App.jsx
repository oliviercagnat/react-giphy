// External libraries
import React, { useState } from 'react';

// Internal libraries
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'INSERT-YOUR-KEY-HERE',
  https: true
});

const App = () => {

  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "kHrKpJiCbOmkWD4xT9"]);

  const searchGiphy = (keyword) => {
    // keyword is the word we look for
    // Rating is G for "general" (not just kids gif)

    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 20
    }, (err, res) => {
      const gifIdArray = res.data.map((gif) => gif.id);
      setGifList(gifIdArray);
    });
  };



  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGiphy={searchGiphy} />
        <div className="selected-gif">
          <Gif gifID={selectedGif}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} setSelectedGif={setSelectedGif}/>
      </div>
    </div>
  );
};

export default App;
