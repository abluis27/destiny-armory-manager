import { useState, useEffect } from "react";
import LocalStorageService from "./localStorage";

function useStorageState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const saved = LocalStorageService.get<T>(key)
      return saved !== null ? saved : initialValue
    }
    return initialValue
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      LocalStorageService.set(key, state)
    }
  }, [key, state])

  return [state, setState]
}

export default useStorageState
