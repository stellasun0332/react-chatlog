import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time ={props.timeStamp}/>
        </p>
        <button
          className="like"
          onClick={()=>{
            props.onLikeToggle(props.id);
          }}
        >{props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired
};

export default ChatEntry;
