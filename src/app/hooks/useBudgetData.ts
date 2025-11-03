import { useState, useEffect } from "react";
import { getDB } from "../lib/db";
import { BudgetItem } from "../types/budgetItem";

export function useBudgetData() {
  const [items, setItems] = useState<BudgetItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const DB_ITEMS_KEY = "items";

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      const db = await getDB();
      const allItems = await db.getAll(DB_ITEMS_KEY);
      setItems(allItems);
    } catch (err) {
      setError("Failed to load items");
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item: Omit<BudgetItem, "id" | "date">) => {
    try {
      const db = await getDB();
      const newItem = { ...item, date: new Date().toISOString() };
      await db.add(DB_ITEMS_KEY, newItem);
      const allItems = await db.getAll(DB_ITEMS_KEY);
      setItems(allItems);
    } catch (err) {
      setError("Failed to add item");
      throw err;
    }
  };

  const removeItem = async (id: number) => {
    try {
      const db = await getDB();
      await db.delete(DB_ITEMS_KEY, id);
      const allItems = await db.getAll(DB_ITEMS_KEY);
      setItems(allItems);
    } catch (err) {
      setError("Failed to remove item");
      throw err;
    }
  };

  const clearAllitems = async () => {
    try {
      const db = await getDB();
      db.clear(DB_ITEMS_KEY);
      setItems([]);
      console.log("clearing");
    } catch (err) {
      setError("Failed to reset items");
      throw err;
    }
  };

  return { items, loading, error, addItem, removeItem, clearAllitems };
}
