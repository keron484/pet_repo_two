import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from "redux";
import petReducer from "./petslice";
const persistConfig = {
    key: 'root',
    storage:storageSession,
  }
  const rootReducer = combineReducers({ 
      pet:petReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
   
})
export const persistor = persistStore(store);