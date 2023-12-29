import {type TypedUseSelectorHook, useSelector as useReduxSelector, useDispatch as useReduxDispatch} from 'react-redux';
import {type store} from '../store/store';

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export type ReduxDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
export type ReduxState = ReturnType<typeof store.getState>;