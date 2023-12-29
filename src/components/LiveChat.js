import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API POOLING");
    }, 2000);

    //API Pooling

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="Akshay Saini" message="This is Namaste React LIVE !" />
    </div>
  );
};

export default LiveChat;
