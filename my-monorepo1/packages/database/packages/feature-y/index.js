import React from 'react';
import { TodoList } from '../ui-components/TodoList';
import React from 'react';
import ReactDOM from 'react-dom';
import { FeatureY } from './FeatureY';

ReactDOM.render(<FeatureY />, document.getElementById('root'));

export const FeatureY = () => {
  return (
    <div>
      <h1>Feature Y</h1>
      <TodoList />
    </div>
  );
};