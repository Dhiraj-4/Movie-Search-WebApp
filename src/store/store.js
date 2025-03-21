import { create } from "zustand";

export const useStore = create((set, get) => ({
    movieName: '',

    setMovieName: (name) => {
        set(() => ({
            movieName: name
        })) 
    },

    movieID: '',

    setMovieID: (id) => {
        set(() => ({
            movieID: id
        }))
    },

    isName: true,

    setIsName: () => {
        set(() => ({
            isName: !get().isName
        }))
    },
}))