import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from './components/checkbox';

const App = () => (
  <div>
    <Checkbox value={true} label="I Agree" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
