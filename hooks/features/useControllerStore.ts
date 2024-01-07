import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const initialState: ControllerState = {
  toggle: false,
};

export const useToggleStore = create(
  persist<ControllerState & ControllerActions>(
    (set) => ({
      ...initialState,
      setToggle: () => set((state) => ({ toggle: !state.toggle })),
    }),
    {
      name: "toggle",
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
