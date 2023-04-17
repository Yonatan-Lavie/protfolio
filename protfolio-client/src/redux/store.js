import { combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { data } from './reducers';
// this well be the palce to put are redusers

// new

import { configureStore } from '@reduxjs/toolkit';
import aboutSliceReduser from './about/aboutSlice';
import skillsSliceReduser from './skills/skillsSlice';
import recommendationsSliceReduser from './recommendations/recommendationsSlice';
import projectsSliceReduser from './projects/projectsSlice';
import navbarSliceReduser from './navbar/navbarSlice';
import contactSliceReduser from './contact/contactSlice';
import themeSliceReduser from './theme/themeSlice';

const reducers = {
  about: aboutSliceReduser,
  skills: skillsSliceReduser,
  recommendations: recommendationsSliceReduser,
  projects: projectsSliceReduser,
  navbar: navbarSliceReduser,
  contact: contactSliceReduser,
  theme: themeSliceReduser,
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

// this well combine all are redusers that will pass to our store
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore(
  {
    reducer: persistedReducer,
  },
  composeWithDevTools(applyMiddleware(thunk))
);
