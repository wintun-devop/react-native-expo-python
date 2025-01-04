import {useSelector,useDispatch} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import { RootState,AppDispatch } from '.';



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector