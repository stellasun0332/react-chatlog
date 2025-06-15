import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  return (
    <div className="chat-log">
      {props.entries.map((entry)=> (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onLikeToggle={props.onLikeToggle}
        />
      ))}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;