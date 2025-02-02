import { useState } from 'react' // if the package following from is not "./ ..." or "/ ..." and it is directly a name, then it means it import directly from node_modules
import './App.css'

// Component1: chat input
function ChatInput({chatMessages, setChatMessages}) {

  const [inputText, setInputText] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);

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

// Component2: ChatMessage()
function ChatMessage({message, sender}) {
  // const {message, sender} = props;
  return (
      <div className={
          sender === 'user' 
          ? 'chat-message-user' 
          : 'chat-message-robot'
      }>
          {sender === 'robot' && (
              <img src="../imgs/robot.png" 
              className="chat-message-profile"/>
          )}
          <div className="chat-message-text">
              {message}
          </div>
          {sender === 'user' && (
              <img src="../imgs/userimage.png" 
              className="robot-message-profile"/>
          )}
      </div>
  );
}

// Component3: ChatMessages()
function ChatMessages({chatMessages}) {
  // a example of hook, hook shouldnt be inside of anything
  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
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


function App() {
  // store data in state. State: data that is connected to HTML
  // first value in state is current data
  // second value in state is updater function, it updates the data.
  // alwasy use this function to change data, it will update HTML as well.
  // const [chatMessages] = array[0];
  // const [setChatMessages] = array[1];
  // below is the array destructuring
  const [chatMessages, setChatMessages] = useState([]);

  return (
      <div className="app-container">
          {chatMessages.length === 0 
              ? <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p> 
              : null
          }

          <ChatMessages 
              chatMessages={chatMessages}
          />

          <ChatInput 
              // use props to share state to ChatInput component
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
          />
      </div> 
  );
}

export default App
