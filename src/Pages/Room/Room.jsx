import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    // generate Kit Token
    const appID = 646264008;
    const serverSecret = "5ab6c12c80f4510b448d7422638ea516";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(), 
      'Jaweria'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario:{
        mode: ZegoUIKitPrebuilt.VideoConference
      }
    })
  };

  return (
    <div className="room-page">
      <div ref={myMeeting}/>
    </div>
  );
};

export default Room;
