import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: "12px", background: "#222" }}>
        <Link to="/" style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}>FakeStore</Link>
      </header>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
