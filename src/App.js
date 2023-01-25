import React from 'react';
import Home from './pages/home';
import About from './pages/about';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }

  render() {
    return (
      <div>
        <nav>
          <button onClick={() => this.setState({page: 'home'})}>Home</button>
          <button onClick={() => this.setState({page: 'about'})}>About</button>
        </nav>
        {this.state.page === 'home' ? <Home /> : <About />}
      </div>
    );
  }
}

export default App;