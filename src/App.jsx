import React, { useState } from 'react'
import Card from './components/Card'
import './App.css'


const cardDeck = [
  {question: 'Are you ready', answer: 'Start'},
  {question: 'What is a data structure that is used in Google Maps', answer: 'Dijkstra Algorithm'},
  {question: 'Name an algorithm that is named by two people', answer: 'Bellman-Ford Algorithm'},
  {question: 'What is the frontend stack majority of Software Engineers use', answer: 'HTML, CSS, JavaScript'},
  {question: 'Name 3 types of Neural Networks', answer: 'RNN, CNN, ANN'},
  {question: 'What is HTTP Code for Server Not Found', answer: '404'},
  {question: 'Do you want to go to FAANG!!!!', answer: 'Yes continue'},
  {question: 'What math theorem is used for fluid mechanics', answer: 'Divergence Theorem'},
]

function App() {
  const [currIndex, setCurrIndex] = useState(0); // Set the index to prev or next if either button arrow is clicked

  const incIndexClick = () => {
    setCurrIndex(((index) => (index + 1) % cardDeck.length));
  }
  const decIndexClick = () => {
    setCurrIndex(((index) => (index - 1) % cardDeck.length))
  }

  return (
    <>
    <div className='root'>
      <h1>CS Quiz</h1>
      <h2>Are you ready to become a future Computer Scientist!</h2>
      <h2>Total Questions: {cardDeck.length}</h2>
      <div className='card-container' key={currIndex}>
       <Card question={cardDeck[currIndex].question} answer={cardDeck[currIndex].answer}></Card>
      </div>
    </div>
    <div className='buttons'>
        <button onClick={decIndexClick} disabled={currIndex === 0}>←</button>
        <button onClick={incIndexClick} disabled={currIndex === cardDeck.length - 1}>→</button> 
    </div>
    </>
  )
}

export default App
