"use client";

import { AppProviderInterface } from "@modules/AppProvider";
import { ICategoryOption } from "@modules/CategoryOption";
import { createContext, useState, useContext, ReactNode } from "react";

const AppContext = createContext<AppProviderInterface>({
  loading: false,
  setLoading: () => {},
  categories: [],
  setCategories: () => {}
});

export function AppWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true)
  const [categories, setCategories] = useState<ICategoryOption[]>([])

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        categories,
        setCategories
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
