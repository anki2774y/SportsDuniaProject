import { useEffect } from 'react';
import styled from './App.module.css';
import College from './College/College';
import { useDispatch } from 'react-redux';
import { actions } from './redux/reducer/collegeReducer';

function App() {

  const disptach = useDispatch();

  useEffect(() => {
    disptach(actions.setInitialState());
  })

  return (
    <div className={styled.App}>
      <College />
    </div>
  );
}

export default App;
