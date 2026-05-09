import { useEffect, useState } from "react";

import socket from "../services/socket";

const OnlineUsers = () => {

  const [count, setCount] =
    useState(0);

  useEffect(() => {

    socket.on(
      "onlineUsers",
      (users) => {

        setCount(users);

      }
    );

    return () => {

      socket.off("onlineUsers");

    };

  }, []);

  return (
    <div className="bg-zinc-900 px-5 py-3 rounded-xl flex items-center gap-3 shadow-lg">

      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

      <p className="text-white font-semibold">

        {count} Users Online

      </p>

    </div>
  );
};

export default OnlineUsers;