import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserCourseInfoContext } from "../../../../../Context/UserCourseInfoProvider";
import { VideoProviderContext } from "../../../../../Context/VideoProvider";
var getYouTubeID = require("get-youtube-id");

const RightSideBar = () => {
  const {
    selectedVideo,
    setSelectedVideo,
    AllVideos,
    setAllVideos,
    id,
    setId,
  } = useContext(VideoProviderContext);

  const {userCourseInfo, setUserCourseInfo } = useContext(UserCourseInfoContext);

  const navigate = useNavigate();

  const handleSelectedVideo = (video_id, video_title, video_link) => {
    console.log([video_id, video_title, video_link]);
    setSelectedVideo({ video_id, video_title, video_link });
    setId(getYouTubeID(video_link));
    navigate(`/${video_id}`);
  };

  console.log(AllVideos);
  return (
    <div className="flex flex-col">
      {AllVideos.map((video) => {
        return (
          <button
            disabled={
              video?.video_id > userCourseInfo.testGiven + 1
                ? "btn-disabled"
                : ""
            }
            key={video.video_id}
            onClick={() => {
              handleSelectedVideo(
                video.video_id,
                video.video_title,
                video.video_link
              );
            }}
            className={`py-4  border rounded-xl mt-2 text-start ${
              video?.video_id === selectedVideo?.video_id
                ? "btn-success"
                : "btn-ghost"
            } ${
              video?.video_id > userCourseInfo.testGiven + 1
                ? "text-gray-400"
                : ""
            } ${
              video?.video_id != selectedVideo?.video_id
                ? "bg-slate-100"
                : "btn-success"
            } `}
          >
            <span className="pl-4 font-medium">
              {video.video_id}. {video.video_title}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default RightSideBar;
