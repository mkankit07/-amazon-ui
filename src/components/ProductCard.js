import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
// Smartwatch-PNG-Image.png
const ProductCard = () => {
    return (
        <div className='col-3'>
            <div className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src="images/wish.svg" alt="wish" />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src="images/watch.jpg" alt='product img' />
                    <img src="images/w2.jpg" alt='product img' height={270} style={{marginLeft:"-4rem"}}/>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphone bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        // onChange={ }
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className=' d-flex flex-column'>
                        <Link>
                            <img src="images/prodcompare.svg" alt="prodcompare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="add-cart" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard