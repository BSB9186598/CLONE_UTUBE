import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
    <div className="flex flex-col">
      <div className="ms-28 mt-6 mb-4 flex">
        <iframe
          className="rounded-2xl"
          width="1200"
          height="670"
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div> 
          <LiveChat />
        </div>
      </div>
      
      <div>
        <CommentContainer />
      </div>
    </div>
    </>
  );
};

export default WatchPage;
