import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const Button = styled.button`
    border-radius: 15px;
    background-color: white;
    cursor: pointer;
  `;
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  const upBtn = () => {
    dispatch({ type: 'INCREASE' });
  };
  const downBtn = () => {
    dispatch({ type: 'DECREASE' });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{count}</div>
        <div>
          <Button onClick={upBtn}> +버튼 </Button>
          <Button onClick={downBtn}> -버튼 </Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
