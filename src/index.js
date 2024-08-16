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
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
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

function Pizza() {
  return (
    <div>
      <img src="pizzas/pizza7.jpg" alt="pizza img" />
      <p>Tomato ,mozarella,spinach and ricotta cheese</p>
      <h3>Pizza Spinach</h3>
    </div>
  );
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
