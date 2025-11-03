import { openDB } from "idb";

export const getDB = async () => {
  return openDB("budget-db", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("items")) {
        db.createObjectStore("items", { keyPath: "id", autoIncrement: true });
      }
    },
  });
};
