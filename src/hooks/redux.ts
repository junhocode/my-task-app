import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch - () => useDispatch<AppDispatch>();
