import React from 'react';
import Gif from './Gif';

const GifList = (props) => {

  const { gifIDs, setSelectedGif } = props;
  return (
    <div className="gif-list">
      {gifIDs.map( ID => <Gif gifID={ID} setSelectedGif={setSelectedGif} key={ID}/>)}
    </div>
  );
};

export default GifList;
