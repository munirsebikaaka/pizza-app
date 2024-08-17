import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rod]semary",
    price: 6,
    photoName: "pizzas/pizza4.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/pizza5.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato ,mozarella,spinach and ricotta cheese",
    price: 12,
    photoName: "pizzas/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato ,mozarella and pepperoni",
    price: 15,
    photoName: "pizzas/pizza2.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato ,mozarella, ham,aragula and burrata cheese",
    price: 12,
    photoName: "pizzas/pizza3.jpg",
    soldOut: false,
  },
  {
    name: "Focaccia",
    ingredients: "Eggs with italian olive oil and rod]semary",
    price: 16,
    photoName: "pizzas/pizza4.jpg",
    soldOut: true,
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
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 && (
        <>
          <p>Codesmann.</p>
          <ul className="">
            {pizzas.map(
              (pizza) => pizza && <Pizza pizzaObj={pizza} key={pizza.name} />
            )}
          </ul>
        </>
      )}

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

function Pizza({ pizzaObj }) {
  return (
    <li className="pizza s">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if (!isOpen)
    return (
      <p className="order">
        We are happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );

  return (
    <footer className="footer">
      {isOpen && <Order openHour={openHour} />}
    </footer>
  );
  //   return React.createElement("footer", null, "we are currently open");
}
function Order({ openHour }) {
  return (
    <div>
      <p className="order">
        We are open untill {openHour.openHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">order</button>
    </div>
  );
}
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
