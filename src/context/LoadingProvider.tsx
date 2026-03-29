import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

/**
 * Loading screen removed — renders children immediately.
 * initialFX is called from MainContainer after Lenis is ready.
 */
export const LoadingProvider = ({
  children,
}: PropsWithChildren<{ resumeLenis?: () => void }>) => {
  const [isLoading] = useState(false);
  const setIsLoading = (_: boolean) => {};
  const setLoading   = (_: number)  => {};

  const value = { isLoading, setIsLoading, setLoading };

  return (
    <LoadingContext.Provider value={value}>
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within a LoadingProvider");
  return context;
};
