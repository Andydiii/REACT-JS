import { useState } from 'react' // if the package following from is not "./ ..." or "/ ..." and it is directly a name, then it means it import directly from node_modules
import './App.css'  // vite lets us import any type of file
import { ChatInput } from './components/ChatInput'; // vite will automatically add .js or .jsx
import ChatMessages from './components/ChatMessages';

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
