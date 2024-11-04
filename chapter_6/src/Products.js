import React from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Products() {

    return (
        <div>
            {listProducts.length > 0 &&
                <ul>{listProducts}</ul>
            }
            {listProducts.length == 0 &&
                <ul>No Products to display</ul>
            }
        </div>
    )

}

export default Products;