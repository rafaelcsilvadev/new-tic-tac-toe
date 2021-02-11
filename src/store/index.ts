import { createStore } from 'redux';
import rootStore from './rootStore';

const store = createStore(rootStore);

export default store;