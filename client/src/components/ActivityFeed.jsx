import { useEffect, useState } from "react";

import socket from "../services/socket";

const ActivityFeed = () => {

  const [activities, setActivities] =
    useState([]);

  useEffect(() => {

    socket.on(
      "newActivity",
      (activity) => {

        setActivities((prev) => [

          activity,

          ...prev.slice(0, 4),

        ]);

      }
    );

    return () => {

      socket.off("newActivity");

    };

  }, []);

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-6">

        Live Activity 🔥

      </h2>

      <div className="space-y-4">

        {activities.length === 0 ? (

          <p className="text-zinc-400">

            No activity yet

          </p>

        ) : (

          activities.map(
            (activity, index) => (

              <div
                key={index}
                className="bg-zinc-800 p-4 rounded-xl"
              >

                <p className="text-white">

                  <span className="text-green-400 font-bold">

                    {activity.user}

                  </span>

                  {" "}solved{" "}

                  <span className="text-yellow-400">

                    {activity.problem}

                  </span>

                </p>

              </div>

            )
          )

        )}

      </div>

    </div>
  );
};

export default ActivityFeed;