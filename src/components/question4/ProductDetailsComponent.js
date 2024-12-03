import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const fruits = {
        1 : ["orange","guavo","pinnealple"],
        2 : ["Mango","Strawberry",""],
        3 : ["papaya","avocado","orange"]
    }
    const { id } = useParams(); // Extract the product ID from the URL

    return (
        <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded">
            <h1 className="text-3xl font-bold mb-4">Product Details</h1>
            <p className="text-lg">
                Displaying details for <strong>Product ID: {id}</strong>.
            </p>
            <p className="mt-4 text-gray-600">
                <hr/>
                {fruits[id].map(item=><h3 className='text-lg'>{item}
                    <hr/>
                </h3>)}
            </p>
        </div>
    );
};

export default ProductDetails;
