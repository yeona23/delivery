import "./App.css";
import Header from "./components/Header";
import ModalShoppingCart from "./components/ModalShoppingCart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <ModalShoppingCart />
    </div>
  );
}

export default App;
