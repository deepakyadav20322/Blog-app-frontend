import React, { useEffect, useState } from 'react';
import socket from '../helper/SocketConfig'

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
        console.log("Socket Connected");
      });
    // Listen for 'newPost' event from the server
    socket.on('newPost', ({ postId, message }) => {
      // Update notifications state with the new notification
      console.log('notification get----->',message)
      setNotifications(prevNotifications => [
        ...prevNotifications,
        { postId, message }
      ]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
        socket.off('newPost');
    };
  }, [socket]); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
