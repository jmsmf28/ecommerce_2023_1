import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from "../../../store/cartSlice"

const ProductDetailDialog = ({ product }) => {
    const dispatch = useDispatch();
    const { id, cover, name, price, description, image } = product

    const handleAddToCart = () => {
        dispatch(cartActions.addToCart({ id, name, price, cover }))
    };

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={product.name} />
            <div>
                {/* Display the 5 small images here */}
            </div>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetailDialog;
