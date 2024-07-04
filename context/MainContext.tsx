"use client"

import { createContext, useState, useContext, ReactNode, useEffect } from "react"
import { AppProviderInterface } from "@modules/AppProvider"
import { Languages } from "@modules/forms/LanguageSwitcher"

const AppContext = createContext<AppProviderInterface>({
  loading: false,
  setLoading: () => {},
  activeLanguage: Languages.CS.toString(),
  setActiveLanguage: () => {}
})

export function AppWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true)
  const [activeLanguage, setActiveLanguage] = useState<string>(Languages.CS.toString())

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        activeLanguage,
        setActiveLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
