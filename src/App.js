import react, { useState } from 'react';
import WordForm from './components/WordForm';
import WordCard from './components/WordCard'
import './App.css';
import './components/WordCard.css';

function App() {

  const [words, setWords] = useState([
    {front: 'my name', back: 'matt'},
    {front: 'age', back: '30'},
    {front: 'age', back: '30'},
    {front: 'age', back: '30'}
  ]);
  
  const cardList = words.map( word =>
  <WordCard 
  front={word.front} 
  back={word.back}
  keys={word.front} />
  );

  return (
    <div className="App">
    <h1 className="app-header" >Dictionary</h1>   
        <main>    
            <WordForm />   
            <section className='cards-container'>
            {cardList}
            </section>
        </main>
    </div>
  );
}

export default App;
