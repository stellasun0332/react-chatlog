import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);

  const toggleLike = (id) => {
    const updateEntries = chatEntries.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          liked: !entry.liked
        };
      } else {
        return entry;
      }
    });

    setChatEntries(updateEntries);
  };

  const getLikedCount = () => {
    return chatEntries.filter((entry) => entry.liked).length;
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <p>{getLikedCount()} ❤️s</p>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onLikeToggle = {toggleLike}
        />
      </main>
    </div>
  );
};

export default App;
