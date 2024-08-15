import React from "react";
import reactDOM from "react-dom/client";

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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>First React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  return <footer>{new Date().toLocaleTimeString()}We're currently open</footer>;
  //   return React.createElement("footer", null, "we are currently open");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/pizza7.jpg" alt="pizza img" />
      <p>Tomato ,mozarella,spinach and ricotta cheese</p>
      <h2>Pizza Spinach</h2>
    </div>
  );
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
