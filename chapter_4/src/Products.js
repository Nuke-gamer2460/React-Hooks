import React from 'react';
import Rating from './Rating';
import { Image } from 'react-bootstrap';
import Product from './Product';

function Products() {
    const getProducts = () => {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
                rating: 5,
                numOfReviews: 2
            }
        ];
    }

    const products = getProducts()

    const listProducts = products.map((product) =>
        <Product key={product.productName} data={product} />
    );
    return (
        <div>
            <ul>{listProducts}</ul>
        </div>
    );


    return (
        <div>
            {getProducts().map((product, index) => (
                <Image key={index}>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={product.imageUrl}
                        alt="Image"
                    />
                    <Image.Body>
                        <h5>{product.productName}</h5>
                        <p>{product.releasedDate}</p>
                        <Rating
                            rating={product.rating}
                            numOfReviews={product.numOfReviews}
                        />
                        <p>{product.description}</p>
                    </Image.Body>
                </Image>
            ))}
        </div>
    )
}

export default Products;