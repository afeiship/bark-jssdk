import React from 'react';
import ReactDOM from 'react-dom';
import { CheckboxGroup } from './components/checkbox-group';

const App = () => (
  <div>
    <CheckboxGroup />
    Hello react
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
