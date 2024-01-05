"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const LaunchpadContext = createContext<GlobalProps>({
  isModalShowing: false
});

type Props = {
  children: ReactNode;
};

export function LaunchpadContextProvider({ children }: Props) {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const value = {
    isModalShowing,
    setIsModalShowing,
  };
  return (
    <LaunchpadContext.Provider value={value}>
      {children}
    </LaunchpadContext.Provider>
  );
}

export const GlobalContext = () => useContext(LaunchpadContext);
