import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <Link to="/" style={{ marginBottom: "20px", display: "inline-block" }}>← Back</Link>
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: "1" }}>
                    <img src={product.image} alt={product.title} style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }} />
                </div>
                <div style={{ flex: "2" }}>
                    <h1>{product.title}</h1>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>${product.price}</p>
                    <p>{product.description}</p>
                    <p><strong>Category:</strong> {product.category}</p>
                </div>
            </div>
        </div>
    );
}
