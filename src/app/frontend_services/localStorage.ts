class LocalStorageService {
    static get<T = unknown>(clave: string): T | null {
      try {
        const item = window.localStorage.getItem(clave);
        return item ? (JSON.parse(item) as T) : null;
      } catch (error) {
        console.error("Error reading the value", clave, error);
        return null;
      }
    }
  
    static set<T>(clave: string, valor: T): void {
      try {
        window.localStorage.setItem(clave, JSON.stringify(valor));
      } catch (error) {
        console.error("Error saving the value", clave, error);
      }
    }
  
    static remove(clave: string): void {
      try {
        window.localStorage.removeItem(clave);
      } catch (error) {
        console.error("Error deleting the value", clave, error);
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
  