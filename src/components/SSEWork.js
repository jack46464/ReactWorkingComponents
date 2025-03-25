import React, { useEffect, useState } from "react";

const SSEComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const RECONNECT_INTERVAL = 5000; // ⏳ Reconnect after 5 seconds if disconnected

  useEffect(() => {
    let eventSource;

    const connectSSE = () => {
      setIsConnected(false);
      setError(null);
      // eventSource = new EventSource("https://your-api-endpoint/sse", {
      //   withCredentials: true, // If authentication is needed
      // });

      const eventSource = new EventSource("https://api.example.com/sse");

      // When a message is received
      eventSource.onmessage = (event) => {
        setMessages((prevMessages) => [...prevMessages, event.data]);
      };

      // Connection opened
      eventSource.onopen = () => {
        console.log("SSE Connected");
        setIsConnected(true);
      };

      // Handle connection error
      eventSource.onerror = () => {
        console.error("SSE Connection Error, reconnecting...");
        setIsConnected(false);
        setError("Connection lost. Retrying...");
        eventSource.close();

        // 🔄 Reconnect after timeout
        setTimeout(connectSSE, RECONNECT_INTERVAL);
      };
    };

    connectSSE(); // 🔌 Initial connection

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, []);

  return (
    <div>
      <h2>SSE Example with Reconnection</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Status: {isConnected ? "🟢 Connected" : "🔴 Disconnected"}</p>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default SSEComponent;