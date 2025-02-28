import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Detaild() {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("id"); 
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!productId) return;
        async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error("Error fetching product details");
                }
                const result = await response.json();
                setProduct(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>;
    if (!product) return <p>No product found.</p>;

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="200" />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        </div>
    );
}

export default Detaild;
