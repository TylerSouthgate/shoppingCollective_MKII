import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'boilerplate',
  storage: storage,
  blacklist: ['routing'],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);

export function configureStore( preloadedState?: any) : { persistor : any, store: any  } {
  let store = createStore(pReducer, preloadedState, composeWithDevTools(middleware));
  let persistor = persistStore(store);
  return {persistor, store};
};


