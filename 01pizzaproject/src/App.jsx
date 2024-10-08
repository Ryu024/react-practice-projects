import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Pizza({pizzaObj}){
  console.log(pizzaObj)
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="spinaci pizza" />
      <div>
      <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}
      </div>
    </li>
  );
}
function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza React Co.</h1>
    </header>
  );
}

function Menu() {
  
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p> 
      <ul className="pizzas">
        {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />
        ))}     
      
      </ul> 
    </main>
  );
}

function Footer() {
  const currentTime = new Date().getHours();
  const open = 1;
  const close = 20;
  const isOpen = currentTime >= open && currentTime <= close;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={close} /> 
      ) : (<p> We're Happy to Welcome you !! Please come back between {open}:00 - {close}:00</p>)
        }
        
    </footer>
  );
}

function Order(props) {

  return (<div className="order">


          <p>We are open till {props.closeHour}:00</p>
          <button className="btn">Order</button>
        </div>)
}

export default App;
