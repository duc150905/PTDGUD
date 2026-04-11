import { atom } from "recoil";
export const searchState = atom({
    key: "searchState",
    default: {
        data: [],
        loading: false,
        error:null,
    }
})