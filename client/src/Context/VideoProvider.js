import React, { createContext, useState } from 'react';

export const VideoProviderContext = createContext();

const VideoProvider = ({ children }) => {
  const video = [
    {
      video_id: 1,
      video_title: "eating mango",
      video_duration: 10,
      video_link: "https://youtu.be/ckiaNqOrG5U",
    },
    {
      video_id: 2,
      video_title: "eating fruit",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 3,
      video_title: "eating vagitable",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 4,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 5,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 6,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 7,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 8,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 9,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
    {
      video_id: 10,
      video_title: "eating tae",
      video_duration: 10,
      video_link: "https://www.youtube.com/watch?v=aqz-KE-bpKQ&t=471s",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState([]);
  const [AllVideos, setAllVideos] = useState(video);
  const [id, setId] = useState("");



  const videoProviderInfo = {
    selectedVideo,
    setSelectedVideo,
    AllVideos,
    setAllVideos,
    id,
    setId,
  }; 
   
    


    return (
      <VideoProviderContext.Provider value={videoProviderInfo}>
        {children}
      </VideoProviderContext.Provider>
    );
};

export default VideoProvider;