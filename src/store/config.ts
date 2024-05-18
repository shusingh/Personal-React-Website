import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterReducer';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const store = setupStore();
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
