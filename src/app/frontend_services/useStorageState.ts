import { useState, useEffect } from "react";
import LocalStorageService from "./localStorage";

function useStorageState<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const saved = LocalStorageService.get<T>(key);
    return saved !== null ? saved : initialValue;
  });

  useEffect(() => {
    LocalStorageService.set(key, state);
  }, [key, state]);

  return [state, setState];
}

export default useStorageState;
