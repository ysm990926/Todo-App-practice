import { createStore } from '@reduxjs/toolkit';
import Reducer from '../reducer/reducer';

const store = createStore(Reducer);

export default store;
