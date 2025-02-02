import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

// Component1: chat input
export function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // whenever we change the input, it will be saved into inputText
  function saveInputText(event) {
      // inputText = new input
      setInputText(event.target.value);
  }

  async function sendMesasge() {
      if (isLoading || inputText === '') {
          return;
      }

      // wont change inputText right away, but change after the function is done.
      setInputText('');

      // cannot directly setNewChatMessages since it wont take effect right away.
      const newChatMessages = [
          // copy the objects in chatMessages
          ...chatMessages,

          // add a new object in this array
          {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
          }
      ];

      setChatMessages([
          ...newChatMessages,
          {
              message: <img src="loading.gif" className="loading" />,
              sender: 'robot',
              id: crypto.randomUUID()
          }
      ]);

      setIsLoading(true);

      const Response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
          ...newChatMessages,
          {
              message: Response,
              sender: 'robot',
              id: crypto.randomUUID()
          }
      ]);

      setIsLoading(false);
  }

  function keyDown(event) {
      if (event.key === 'Enter') {
          sendMesasge();
      } else if (event.key === 'Escape') {
          setInputText('');
      }
  }

  return ( 
      // use fragment can use one less div
      <div className="chat-input-container">
          <input 
              placeholder="Send a message to Chatbot" type="text" 
              size="30" 
              onChange={saveInputText}
              value={inputText} // with this we can change the content in input box
              onKeyDown={keyDown}
              className="chat-input"
          /> 
          <button
              onClick={sendMesasge}
              className="send-button"
          >Send</button>
      </div>
  );
}