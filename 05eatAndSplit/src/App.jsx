import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const [selectFriend, setSelectfriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSection(friend) {
    setSelectfriend((cur) => (cur?.id === friend.id ? null : friend)); //ye function selectFriend ko update krta hai and jab Select button first baar click karenge to ye cur.id check krega and wo undefined hoga to flase hoga and friend return krega yaani slectfrind ki value friend ki value ho jayegi jisme hum click krenge
  }
  function onSplitBill(value) {
    setFriends((friend) =>
      friend.map((friends) =>
        friends.id === selectFriend.id
          ? { ...friends, balance: friends.balance + value }
          : friends
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          Onselect={handleSection}
          selectFriend={selectFriend}
        />

        {showAddFriend && <FormAddFriend onSumiteFriend={handleAddFriend} />}

        <Button onClick={() => setShowAddFriend((e) => !e)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectFriend && (
        <FormSplitbill
          selectFriend={selectFriend}
          friend={friends}
          onSplitBill={onSplitBill}
        />
      )}
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
function FriendList({ friends, Onselect, selectFriend }) {
  return (
    <ul>
      {friends.map((e) => (
        <Friend
          key={e.id}
          friend={e}
          selectFriend={selectFriend}
          Onselect={Onselect}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, Onselect, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      )}

      {friend.balance < 0 && (
        <p className="red">
          You owes {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance == 0 && (
        <p className="">You and {friend.name} are even</p>
      )}

      <Button onClick={() => Onselect(friend)}>
        {isSelected ? "close" : "select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onSumiteFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onSumiteFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitbill({ selectFriend, friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByuser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const friendValue = bill - paidByuser;
  function handleSubmit(e) {
    e.preventDefault();
    onSplitBill(whoIsPaying === "user" ? friendValue : -paidByuser);
    setBill("")
    setPaidByUser("")
    
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectFriend.name}</h2>

      <label htmlFor="">✊ Bill Value </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🤖 Your Expense</label>
      <input
        type="text"
        value={paidByuser}
        onChange={(e) => setPaidByUser(e.target.value)}
      />

      <label>👾 {selectFriend.name} Expense</label>
      <input type="text" disabled value={friendValue} />

      <label htmlFor="">✊ Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="You">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
