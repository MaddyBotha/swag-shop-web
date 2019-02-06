import React, {Component} from 'react';
import './wishlist.css';

//Component
import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state = {wishList: [
            {
                title:"Lara's Bow & Arrow Set",
                price: 33.99,
                _id: "3kned3k3ddd"
            },
            {
                title:"COD MW3 Weapons Set",
                price: 34.99,
                _id: "ddkew3545r"
            },
            {
                title:"Fallout 4 Vault:101 Jumpsuit Set",
                price: 54.99,
                _id: "389dfgush3"
            }
        ]};

        //bind functions
        this.createWishlist = this.createWishlist.bind(this);
    }


    createWishlist = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        );
        return (list);
    }


    render() {
        return(
        <div className="card">
            <div className="card-block">
                <h4 className="card-title">Wish List</h4>
                <ul className="list-group">
                    {this.createWishlist()}
                </ul>
            </div>
        </div>
        );
    }
}

export default WishList;
