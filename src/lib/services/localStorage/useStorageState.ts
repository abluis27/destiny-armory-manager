import { useState, useEffect } from "react";
import LocalStorageService from "./localStorage";

function useStorageState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(initialValue)

  // Load from localStorage after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = LocalStorageService.get<T>(key)
      if (saved !== null) {
        setState(saved);
      }
    }
  }, [key])

  // Save to localStorage on state change
  useEffect(() => {
    if (typeof window !== "undefined") {
      LocalStorageService.set(key, state)
    }
  }, [key, state])

  return [state, setState]
}

export default useStorageState
