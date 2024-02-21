"use client";
import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

export const LaunchpadContext = createContext<GlobalProps>({
  isModalShowing: false,
  showModal: false,
});

type Props = {
  children: ReactNode;
};

export function LaunchpadContextProvider({ children }: Props) {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  function toggleModal() {
    setShowModal((prevState) => !prevState);
  }

  const onButtonClick = (ref: any) => {
    ref?.current?.click();
  };

  const value = {
    onButtonClick,
    isModalShowing,
    setIsModalShowing,
    showModal,
    setShowModal,
    toggleModal,
  };
  return (
    <LaunchpadContext.Provider value={value}>
      {children}
    </LaunchpadContext.Provider>
  );
}

export const GlobalContext = () => useContext(LaunchpadContext);
