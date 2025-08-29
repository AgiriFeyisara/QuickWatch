import { create } from "zustand";

const useAppStore = create((set, get) => ({
  // --- Navbar state
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  closeMenu: () => set({ isOpen: false }),

  // --- Watchlist state
  watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],

  addToWatchlist: (movie) => {
    const { watchlist } = get();
    const exists = watchlist.some((m) => m.imdbID === movie.imdbID);

    if (exists) {
      alert(`${movie.Title} is already in your watchlist.`);
      return;
    }

    const updated = [...watchlist, movie];
    localStorage.setItem("watchlist", JSON.stringify(updated));
    set({ watchlist: updated });
    alert(`${movie.Title} has been added to your watchlist!`);
  },

  removeFromWatchlist: (imdbID) => {
    const { watchlist } = get();
    const updated = watchlist.filter((m) => m.imdbID !== imdbID);
    localStorage.setItem("watchlist", JSON.stringify(updated));
    set({ watchlist: updated });
    alert("Movie removed from your watchlist.");
  },
}));

export default useAppStore;
