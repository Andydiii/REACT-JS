import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/userimage.png';
import './ChatMessage.css'

// Component2: ChatMessage()
export function ChatMessage({message, sender}) {
  // const {message, sender} = props;
  return (
      <div className={
          sender === 'user' 
          ? 'chat-message-user' 
          : 'chat-message-robot'
      }>
          {sender === 'robot' && (
              <img src={RobotProfileImage} 
              className="chat-message-profile"/>
          )}
          <div className="chat-message-text">
              {message}
          </div>
          {sender === 'user' && (
              <img src={UserProfileImage}
              className="robot-message-profile"/>
          )}
      </div>
  );
}