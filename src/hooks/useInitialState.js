import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => setVideos(data), 15000);
      });
  }, []);
  return videos;
};

export default useInitialState;
