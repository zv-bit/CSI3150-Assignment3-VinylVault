import React from "react";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({isOpen,cart,onClose,onUpdateQuantity,onRemove}) => {
    const navigate =useNavigate();
    if (!isOpen) return null;
    
    const subtotal = cart.reduce( (sum,item) => sum+item.price*item.quantity,0,);

    const handleProceedToCheckout = () => {
        onClose();
        navigate("/checkouot");
    };

    
}