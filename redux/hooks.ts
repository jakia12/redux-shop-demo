import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store"; // make sure this path is correct

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
