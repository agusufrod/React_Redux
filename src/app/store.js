import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './Features/Counter/reducer';

let rootReducers = combineReducers({
  counter: counterReducer,
});

// const store = () => {
//   const Redux = () => {
//     return (
//       <div>
//         <Provider store={store}>
//           <Counter />
//         </Provider>
//       </div>
//   }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
