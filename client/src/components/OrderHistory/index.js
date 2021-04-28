import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../../utils/queries";

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        user = data.user;
    }

    return (
        
        <>
        
            
                {user ? (
                    <>
                    <h2 className="my-2 title-styling text-color Jones">Order History for {user.firstName} {user.lastName}</h2>
                    <div className="card px-1 py-1 text-color form-p-2 Jones ">
                        {user.orders.map((order) => (
                            <div key={order._id} className="my-2">
                                <h3 className="Jones text-left">Order Date: {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
                                <div className="flex-row ">
                                    {order.products.map(({ _id, image, name, price }, index) => (
                                        <div key={index} className="card px-1 py-1 product-styling">
                                            <Link to={`/products/${_id}`}>
                                                <img
                                                    alt={name}
                                                    src={`/images/${image}`}
                                                />
                                                <p className="hover underline">{name}</p>
                                            </Link>
                                            <div>
                                                <span>${price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            
                            </div>
                        ))}
                    </div>                        
                    </>
                ) : null}

        </>)

};

export default OrderHistory;
