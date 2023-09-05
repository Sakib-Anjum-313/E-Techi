import React, { useContext } from "react";
import YouTube from "react-youtube";
import { UserCourseInfoContext } from "../../../../../../Context/UserCourseInfoProvider";
import { VideoProviderContext } from "../../../../../../Context/VideoProvider";
var getYouTubeID = require("get-youtube-id");

const LeftSideVideoBar = () => {
  const {
    selectedVideo,
    setSelectedVideo,
    AllVideos,
    setAllVideos,
    id,
    setId,
  } = useContext(VideoProviderContext);

  const { userCourseInfo, setUserCourseInfo } = useContext(
    UserCourseInfoContext
  );

  const onHandleEnd = (event) => {
    // console.log(event);
  };

  const onHandlePreviousClick = (video_id) => {
    const NewSelectedVideo = AllVideos.find(
      (video) => video.video_id === video_id - 1);
    
    setSelectedVideo(NewSelectedVideo);
    setId(getYouTubeID(NewSelectedVideo.video_link));

    console.log(NewSelectedVideo);
    console.log(video_id);
  };

  const onHandleNextClick = (video_id) => {
    const NewSelectedVideo = AllVideos.find(
      (video) => video.video_id === video_id + 1);
    
    setSelectedVideo(NewSelectedVideo);
    setId(getYouTubeID(NewSelectedVideo.video_link));

    console.log(NewSelectedVideo);
    console.log(video_id);
  };

  const opts = {
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 0,
      origin: "http://localhost:3000",
    },
  };

  return (
    <div>
      {/* Video title */}

      <div className="flex justify-start ml-4">
        <p className="font-sans font-bold text-3xl mb-4">
          <span>{selectedVideo?.video_id}. </span>
          {selectedVideo?.video_title}
        </p>
      </div>

      {/* //youtube player_parameters */}

      <div className="flex justify-center">
        <YouTube videoId={id} opts={opts} onEnd={onHandleEnd} />
      </div>

      {/* // Button */}

      <div className="flex justify-between mt-5 mx-4">
        {/* button previous */}

        <button
          onClick={() => {
            onHandlePreviousClick(selectedVideo?.video_id);
          }}
          className="btn btn-info font-bold"
        >{`< Previous`}</button>

        {/* button GIVE A TEST */}

        <button
          className={`btn  font-bold ${
            selectedVideo?.video_id > userCourseInfo?.testGiven
              ? "btn-warning"
              : "btn-disabled"
          }`}
        >
          Give a test
        </button>

        {/* button NEXT */}

        <button
          onClick={() => {
            onHandleNextClick(selectedVideo?.video_id);
          }}
          className={`btn font-bold ${
            userCourseInfo?.testGiven >= selectedVideo?.video_id
              ? "btn-info"
              : "btn-disabled"
          }`}
        >{`Next >`}</button>
      </div>
    </div>
  );
};

export default LeftSideVideoBar;
