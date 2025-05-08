class LocalStorageService {
    static get<T = unknown>(key: string): T | null {
      try {
        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
      } catch (error) {
        console.error("Error reading the value", key, error);
        return null;
      }
    }
  
    static set<T>(key: string, value: T): void {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error saving the value", key, error);
      }
    }
  
    static remove(key: string): void {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.error("Error deleting the value", key, error);
      }
    }
  
    static clear(): void {
      try {
        window.localStorage.clear();
      } catch (error) {
        console.error("Error reseting localStorage", error);
      }
    }
  }
  
  export default LocalStorageService;
  