
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import mantle from './assets/mantle.svg'
import AIlogo from './assets/AI-logo.svg'
import { sendMessageToMantle } from './mantle'
import { useEffect, useRef, useState } from 'react'



function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm your Mantle AI agent, ask me anything about the ecosystem. I can fetch you the balance and transaction details of wallets and transactions on the eth chain.",
      isBot: true,
    }
]);

  useEffect(()=> {
    msgEnd.current.scrollIntoView();
  }, [messages])

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const res = await sendMessageToMantle(text);
    setMessages([
      ...messages, 
      {text, isBot: false},
      {text: res, isBot: true}
    ])
  }
  
  const handleEnter = async (e) => {
    if(e.key==="Enter") await handleSend();
  }

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const res = await sendMessageToMantle(text);
    setMessages([
      ...messages, 
      {text, isBot: false},
      {text: res, isBot: true}
    ])
  }

  return (
    <div className='App'>
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={mantle} alt="" className="logo" /></div>
          <button className="midBtn" onClick={() => {window.location.reload()}}><img src={addBtn} alt="new chat" className="addBtn"/>New Chat</button>
          <div className="upperSideBottom">
            <button className="query" onClick={handleQuery} value={"What is Mantle Ecosystem?"}><img src={msgIcon} alt="Query"/>What is Mantle Ecosystem?</button>
            <button className="query" onClick={handleQuery} value={"Tell me about the Mantle Hackathon"}><img src={msgIcon} alt="Query"/>Tell me about the Mantle Hackathon</button>
          </div>
        </div>
        <div className="lowerSide">
            <div className="listItems">
              <img src={home} alt="home" className="listItemsImg" />Home
            </div>
            <div className="listItems">
              <img src={saved} alt="saved" className="listItemsImg" />Saved
            </div>
            <div className="listItems">
              <img src={rocket} alt="rocket" className="listItemsImg" />Upgrade to Pro
            </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={`${message.isBot ? "chat bot" : "chat"}`}>
              <img className='chatImg' src={message.isBot ? AIlogo : userIcon} alt="" />
              <p className="txt">{message.text}</p>
            </div>
          ))}
          <div ref={msgEnd}/>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' value={input} onKeyDown={handleEnter} onChange={(e) => setInput(e.target.value)}/>
            <button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>AI-generated, for reference only</p>
        </div>
      </div>
    </div>
  )
}

export default App
