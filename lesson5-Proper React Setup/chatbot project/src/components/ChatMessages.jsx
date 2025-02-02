import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

// Component3: ChatMessages()
function ChatMessages({chatMessages}) {
  // a example of hook, hook shouldnt be inside of anything
  const chatMessagesRef = useRef(null);

  useEffect(() => {
      const containerElem = chatMessagesRef.current;
      if (containerElem) {
          containerElem.scrollTop = containerElem.scrollHeight;
      }
  }, [chatMessages]);

  // generate HTML using component and prop. result is a array of components
  return ( 
      <div className="chat-messages-container"
          ref={chatMessagesRef}
      >
          {chatMessages.map((chatMessage) => {
              return (
                  <ChatMessage 
                      message={chatMessage.message} 
                      sender = {chatMessage.sender}
                      key = {chatMessage.id}
                  />
              );
          })}
      </div>
  );
}

export default ChatMessages;
