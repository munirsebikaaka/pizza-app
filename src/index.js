import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rod]semary",
    price: 6,
    photoName: undefined,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: undefined,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato ,mozarella,spinach and ricotta cheese",
    price: 12,
    photoName: undefined,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato ,mozarella and pepperoni",
    price: 15,
    photoName: undefined,
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato ,mozarella, ham,aragula and burrata cheese",
    price: 12,
    photoName: undefined,
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

function Header() {
  return (
    <header className="header">
      <h1>First React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>{pizzaData.map((pizza) => (pizza.name = ""))}</div>
      {/* <Pizza
        name="Pizza Spinach"
        ingredients="Tomato ,mozarella,spinach and ricotta cheese"
        photoName="pizzas/pizza7.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato ,mashroom"
        photoName="pizzas/pizza3.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("we are open");
  //   else alert("closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}We're currently open
    </footer>
  );
  //   return React.createElement("footer", null, "we are currently open");
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
