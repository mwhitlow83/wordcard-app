import React from 'react'

export default function WordForm() {
  return (
    <section className="card-form">
  <H2>New Card</H2>
  <form actionm="#" method="get">
    <div className="form-row">
      <label>
        Question:</label>
        <input type="text" name="q" placeholder="Question" />     
    </div>
    <div className="form-row">
      <label>
        Answer:</label>
        <input type="text" name="a" placeholder="Answer" />
      
    </div>
    <div>
      <button type="submit" >add word</button>
    </div>
  </form>
      </section>
  );
}
