import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddlaware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddlaware];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddlaware.run(sagas);

export default store;
