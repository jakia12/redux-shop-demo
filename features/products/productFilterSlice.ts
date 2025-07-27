// features/products/productFilterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  sort: "asc" | "desc";
  search: string;
}

const initialState: FilterState = {
  category: "all",
  sort: "asc",
  search: "",
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<"asc" | "desc">) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearch } = productFilterSlice.actions;
export default productFilterSlice.reducer;
