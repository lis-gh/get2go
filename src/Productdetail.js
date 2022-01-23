import Product from "./Product";
import Searchheader from './Searchheader';
import Latestproducts from './Latestproducts';

function Productdetail(){
    return (
        <div>
            <Searchheader/>
            <section class="m-brd">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"> <img src="assets/img/Line8.png" alt=""/></li>
                                    <li class="breadcrumb-item"><a href="#">Shop</a></li>
                                    <li class="breadcrumb-item"> <img src="assets/img/Line8.png" alt=""/></li>
                                    <li class="breadcrumb-item active" aria-current="page">CURREN 8109 Watches</li>
                                </ol>
                            </nav>    

                        </div>
                    </div>
                </div>
            </section>
            <section class="single-item">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="m-thumb-slider">
                                <div id="big" class="owl-carousel owl-theme">
                                    <div class="item">
                                        <img src="assets/img/h1.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="item">
                                        <img src="assets/img/h2.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="item">
                                        <img src="assets/img/h3.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="item">
                                        <img src="assets/img/h4.png" class="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div id="thumbs" class="owl-carousel mthumb owl-theme">
                                    <div class="item">
                                        <img src="assets/img/h1.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="item">
                                        <img src="assets/img/h2.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="item">
                                        <img src="assets/img/h3.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="item">
                                        <img src="assets/img/h4.png" class="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-1">

                        </div>
                        <div class="col-lg-6">
                            <div class="main-md">
                                <h1 class="md-title">CURREN 8109 Watches</h1>
                                <p class="cat-tag">Watches</p>
                                <div class="product-rating">
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star checked"></span>
                                    <span class="fas fa-star"></span>
                                </div>
                                <strike class="old-price">$378.00</strike>
                                <h5 class="current-price">$348.00</h5>
                                <p class="md-des">
                                    Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet ipsum 
                                    vestibulum, molestie arcu ac, efficitur tellus.
                                </p>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="m-quantity">
                                            <input type="button" value="-" class="button-minus border rounded-circle  icon-shape icon-sm " data-field="quantity"/>
                                            <input type="number" min="0" step="1" value="1" name="quantity" class="quantity-field border-0 text-center "/>
                                            <input type="button" value="+" class="button-plus border rounded-circle icon-shape icon-sm " data-field="quantity"/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ul class="list-inline md-btn-list">
                                        <li class="list-inline-item"><a class="btn btn-fill" href="#">Buy Now</a></li>
                                        <li class="list-inline-item"><a class="btn btn-border" href="#">Add to Cart</a></li>
                                        <li class="list-inline-item"><a class="btn btn-circle" href="#"><img src="assets/img/btn-wish.svg" alt=""/> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="specification-sec">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Specification</button>
                        <button class="nav-link" id="nav-Reviews-tab" data-bs-toggle="tab" data-bs-target="#nav-Reviews" type="button" role="tab" aria-controls="nav-Reviews" aria-selected="false">Reviews</button>
                    </div>
                </nav>        
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7 my-auto">
                                    <h1 class="spec-title">Nuqqam Et Massa</h1>
                                    <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo 
                                        vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    <h1 class="spec-title">Wireless</h1>
                                    <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo 
                                        vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    <h1 class="spec-title">Fabolous Sound</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some form, by injected humour, or randomised words which don't 
                                        look even slightly believable.</p>
                                </div>
                                <div class="col-lg-1 my-auto">

                                </div>
                                <div class="col-lg-4 my-auto text-center">
                                    <div class="product-bg">
                                        <img src="assets/img/orange.png" class="img-fluid" alt=""/>
                                        <img src="assets/img/shadow.svg" class="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7 my-auto">
                                    <h1 class="spec-title">Nuqqam Et Massa</h1>
                                    <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo 
                                        vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    <h1 class="spec-title">Wireless</h1>
                                    <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo 
                                        vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    <h1 class="spec-title">Fabolous Sound</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some form, by injected humour, or randomised words which don't 
                                        look even slightly believable.</p>
                                </div>
                                <div class="col-lg-1 my-auto">

                                </div>
                                <div class="col-lg-4 my-auto text-center">
                                    <div class="product-bg">
                                        <img src="assets/img/orange.png" class="img-fluid" alt=""/>
                                        <img src="assets/img/shadow.svg" class="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-Reviews" role="tabpanel" aria-labelledby="nav-Reviews-tab">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7 my-auto">
                                    <h1 class="spec-title">Nuqqam Et Massa</h1>
                                    <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo 
                                        vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    <h1 class="spec-title">Wireless</h1>
                                    <p>Sed sodales sed orci molestie tristique. Nunc dictum, erat id molestie vestibulum, ex leo 
                                        vestibulum justo, luctus tempor erat sem quis diam. Lorem ipsum dolor sit amet.</p>
                                    <h1 class="spec-title">Fabolous Sound</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have 
                                        suffered alteration in some form, by injected humour, or randomised words which don't 
                                        look even slightly believable.</p>
                                </div>
                                <div class="col-lg-1 my-auto">

                                </div>
                                <div class="col-lg-4 my-auto text-center">
                                    <div class="product-bg">
                                        <img src="assets/img/orange.png" class="img-fluid" alt=""/>
                                        <img src="assets/img/shadow.svg" class="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <section class="section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="main-h">
                                <span class="m-sub">SHOP</span>
                                <h1 class="m-title">Recent Products</h1>
                            </div>
                        </div>
                    </div>
                    <Latestproducts/>
                </div>
            </section>
      

        </div>
    )
}

export default Productdetail;