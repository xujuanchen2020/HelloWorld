import './App.css'
import React, { useState, useEffect } from 'react'
import Modal from './popup/Modal'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding: '10px',
}

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={()=>console.log("clicked")}>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  )
}

export default App;
