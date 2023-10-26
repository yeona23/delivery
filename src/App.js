import "./App.css";
import Header from "./components/Header";
import ModalShoppingCart from "./components/ModalShoppingCart";
import ProductList from "./components/ProductList";
import { useState, useRef } from "react";

function App() {
  const [product, setProduct] = useState([
    {
      id: "0",
      title: "피자",
      price: 20000,
      amount: 1,
    },
    {
      id: "1",
      title: "김치찌개",
      price: 9000,
      amount: 1,
    },
    {
      id: "2",
      title: "자장면",
      price: 6500,
      amount: 1,
    },
  ]);

  const idRef = useRef(0);
  const [cartItem, setCartItem] = useState([]);
  const handleSubmit = (content) => {
    const newItem = {
      id: idRef.current,
      title: content.title,
      price: content.price,
      amount: content.amount,
    };
    idRef.current++;
    setCartItem([newItem, ...cartItem]);
  };

  const onDelete = (targetId) => {
    setCartItem((preCartItem) =>
      preCartItem.filter((it) => it.id !== targetId)
    );
  };

  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const openModal = () => {
    setIsOpenedModal(true);
  };
  const closeModal = () => {
    setIsOpenedModal(false);
  };

  return (
    <div className="App">
      <Header openModal={openModal} cartItem={cartItem} />
      <ProductList product={product} onSubmit={handleSubmit} />
      <ModalShoppingCart
        cartItem={cartItem}
        onDelete={onDelete}
        isOpened={isOpenedModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
