import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

const About = () => (
    <div>
      <h2>О себе</h2>
      <p>Здесь вы можете написать информацию о себе, своем образовании, опыте работы и навыках.</p>
    </div>
);

const WorkSamples = () => (
    <div>
      <h2>Примеры работ</h2>
      <p>Здесь вы можете разместить примеры своих работ, сопроводительные изображения и описания.</p>
    </div>
);

const Contact = () => (
    <div>
      <h2>Контактная информация</h2>
      <p>Укажите свои контакты: телефон, электронная почта, ссылки на социальные сети и другие способы связи.</p>
    </div>
);

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/">О себе</Link></li>
                <li><Link to="/work-samples">Примеры работ</Link></li>
                <li><Link to="/contact">Контактная информация</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/work-samples" component={WorkSamples} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </main>
        </div>
      </Router>
  );
}

export default App;
