import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
const OurStore = () => {
    const [grid,setGrid]=useState(4)
    return (
        <div>
            <Meta title="Our store" />
            <BreadCrumb title="Our store" />
            <div className='store-wrapper home-wrapper-2 py-4 mb-0'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter by</h3>
                                <div>
                                    <h5 className='sub-title'>Availability</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id="" />
                                            <lebal className='form-check-label' htmlFor="">
                                                In stock (1)
                                            </lebal>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value="" id="" />
                                            <lebal className='form-check-label' htmlFor="">
                                                Out of stock (0)
                                            </lebal>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex  align-items-center gap-10'>
                                        <div className='form-floating'>
                                            <input type='text' className='form-control'
                                                id='floatinginput'
                                                placeholder='From'
                                            />
                                            <label htmlFor='floatinginput'>From</label>
                                        </div>
                                        <div className='form-floating'>
                                            <input type='text' className='form-control'
                                                id='floatinginput1'
                                                placeholder='To'
                                            />
                                            <label htmlFor='floatinginput1'>To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Color</h5>
                                    <div>
                                        <div className='d-flex flex-wrap'>
                                            <ul className='colors ps-0'>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input'
                                                type="checkbox"
                                                value=""
                                                id='color-1' />
                                            <label className='form-check-label' htmlFor='color-1'>S (2)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input'
                                                type="checkbox"
                                                value=""
                                                id='color-2' />
                                            <label className='form-check-label' htmlFor='color-2'>M (2)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input'
                                                type="checkbox"
                                                value=""
                                                id='color-3' />
                                            <label className='form-check-label' htmlFor='color-3'>L (2)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product by</h3>
                                <div>
                                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                        <span className='badge bg-light text-secondary py-2 px-3  rounded-3'>Headphone</span>
                                        <span className='badge bg-light text-secondary py-2 px-3  rounded-3'>Laptop</span>
                                        <span className='badge bg-light text-secondary py-2 px-3  rounded-3'>Mobile</span>
                                        <span className='badge bg-light text-secondary py-2 px-3  rounded-3'>Wire</span>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Random product</h3>
                                <div>
                                    <div className='random-products mb-3 d-flex'>
                                        <div className='w-50'>
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className='w-50'>
                                            <h5> Kids headphone bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                // onChange={ }
                                                size="24"
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='price'>$ 300.00</p>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
                                        </div>
                                        <div className='w-50'>
                                            <h5> Kids headphone bulk 10 pack multi colored for students</h5>
                                            <ReactStars
                                                count={5}
                                                // onChange={ }
                                                size={24}
                                                value="3"
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='price'>$ 300.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-9">
                            <div className='filter-sort-grid'>
                                <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex  align-items-center gap-10'>
                                    <p className='mb-0 d-flex flex-wrap' style={{width:"100px"}}>Sort by:</p>
                                    <select name="" className='form-control form-select' id="">
                                      <option value="manuak">fetured</option>
                                      <option value="best-selling" selected="selected">Best selling</option>
                                      <option value="title-ascending">Alphobetically, A-Z</option>
                                      <option value="title-descending">Alphobetically, Z-A</option>
                                      <option value="price-ascending">Price, low to high</option>
                                      <option value="price-descending">Price, High to low</option>
                                      <option value="created-ascending">Date, old to new</option>
                                      <option value="created-descending">Date, new to old</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 products</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={()=>{setGrid(3 )}} src='/images/gr4.svg' className='d-block img-fluid' alt='grid'/>
                                        <img onClick={()=>{setGrid(4)}} src='/images/gr3.svg' className='d-block img-fluid' alt='grid'/>
                                        <img onClick={()=>{setGrid(6)}} src='/images/gr2.svg' className='d-block img-fluid' alt='grid'/>
                                        <img onClick={()=>{setGrid(12)}} src='/images/gr.svg' className='d-block img-fluid' alt='grid'/>
                                    </div>
                                </div>
                                </div>
                               
                            </div>
                            <div className='products-list row pb-4 '>
                                <ProductCard grid={grid}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStore