import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import createSagaMiddleware from 'redux-saga'; // redux-saga 가져오기
import  {watchLogin} from './sagas/saga';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // applyMiddleware 추가

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware) );

//반드시 store 밑에서 실행 해줘야 함. 
sagaMiddleware.run(watchLogin); 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

