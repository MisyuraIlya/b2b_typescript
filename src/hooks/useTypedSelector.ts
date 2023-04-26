import { TypedUseSelectorHook, useSelector } from "react-redux";
// import { RootState } from "@store/store";
import { TypeRootState } from "@/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector