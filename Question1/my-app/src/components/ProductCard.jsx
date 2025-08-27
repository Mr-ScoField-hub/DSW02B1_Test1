import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.id}`} style={{
            display: "block", padding: "12px", border: "1px solid #ccc", borderRadius: "10px",
            background: "#fff", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
            <img src={product.image} alt={product.title} style={{ height: "150px", objectFit: "contain" }} />
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
        </Link>
    );
}
