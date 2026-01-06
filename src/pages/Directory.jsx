import { useEffect, useState } from "react";
import { loadItems } from "../data/loadItems";

export default function Directory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems().then(setItems);
  }, []);

  return (
    <div>
      <h1>Directory</h1>

      {items.length === 0 && <p>No entries yet.</p>}

      {items.map((item, index) => (
        <div key={index}>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
}
