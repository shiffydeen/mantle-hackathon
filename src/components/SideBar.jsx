import React from 'react'

const SideBar = () => {
  return (
    <div className="side-Bar">
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
  )
}

export default SideBar
