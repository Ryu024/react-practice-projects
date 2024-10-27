import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  function habndleItems(item) {
    setItems([...items, item]);
  }
  function handleDelteitems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleitem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handlecClearList () {
      const confirmed = window.confirm("Are you sure you want to delete all item")
      
     if(confirmed) setItems([]) ;   
  }
  return (
    <div className="app">
      <Logo />
      <Form addItems={habndleItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDelteitems}
        onToggleItem={handleToggleitem}
        onClear={handlecClearList}
      />

      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h1> -- Far Away --</h1>;
}

function Form({ addItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQunatity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    addItems(newItem);
    setDescription("");
    setQunatity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQunatity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (i, a) => a + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItems, onToggleItem , onClear}) {
  const [selct , setSelect ] = useState("input");
  let sortedItems;
  if(selct === "input") sortedItems = items;
  if(selct === "description") sortedItems = items.slice().sort((a , b)=> a.description.localeCompare(b.description))
    if(selct === "packed") sortedItems = items.slice().sort((a , b) => Number(a.packed)- Number(b.packed));

  return (
    

    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={selct} onChange={(e)=> setSelect(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">Sort by packed items</option>
        </select>
      <button onClick={onClear}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} {item.packed}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((e) => e.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  if (numItems === 0)
    return <p className="stats">Add some items in your packing list</p>;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You Packed Everything`
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
     
    </footer>
  );
}

export default App;
