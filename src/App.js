
function App() {

  const scores = [
    {category: 'Reaction', score: '80', color: 'hsl(0, 100%, 67%)', icon: '/images/icon-reaction.svg'},
    {category: 'Memory', score: '92', color: 'hsl(39, 100%, 56%)', icon: '/images/icon-memory.svg'},
    {category: 'Verbal', score: '61', color: 'hsl(166, 100%, 37%)', icon: '/images/icon-verbal.svg'},
    {category: 'Visual', score: '72', color: 'hsl(234, 85%, 45%)', icon: '/images/icon-visual.svg'},
  ]

  const scoreDivs = scores.map((item, index) => {
    return <div className="type" id={item.category}>
      <div className="category-display">
        <img src={item.icon} alt={item.category} className="icon"/>
        <span class="item-category">{item.category}</span>
      </div>
      <div className="score-display">
        <span class="item-score">{item.score}</span>
        <span class="slash-100">/ 100</span>
      </div>
    </div>
  })

  return (
    <div className="container">
      <div className="results-summary-component">
        <div className="container-result">
          <h3 id="your-result">Your Result</h3>
          <div className="circle-total">
            <span id="total-score">76</span>
            <span id="max-score">of 100</span>
          </div>
          <h2 id="result-great">Great</h2>
          <p id="result-paragraph">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="container-summary">
          <div id="summary-header">
            <h3>Summary</h3>
          </div>
          {scoreDivs}
          <button id="continue-button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
