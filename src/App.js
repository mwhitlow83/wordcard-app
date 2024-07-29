import { useState } from 'react';
import WordCard from './components/WordCard';
import WordForm from './WordForm/WordForm';
import './App.css';

function App() {

  const [words, setWords] = useState([
    {front: 'my name', back: 'matt'},
    {front: 'age', back: '30'},
    {front: 'age', back: '30'},
    {front: 'age', back: '30'}
  ]);
  
  const cardList = words.map( word =>
  <WordCard 
  front={words.front} 
  back={words.back}
  keys={words.front} />
  );

  return (
    <div className="App">
    <H1 className="app-header" >Dictionary</H1>
    
        <main >
     
      <WordForm />   

      <section className='cards-container'>
       {cardList}
      </section>
        </main>
    </div>
  );
}

export default App;
