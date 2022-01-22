import Product from './Product';
function Home(){
    let items=[
        {id:'1',defaultimg:'assets/img/earphones.png',hoverimg:'assets/img/earphones.png',title:'Apple Airpods - Airpod Gray Colorways',price:'$105'},
        {id:'2',defaultimg:'assets/img/goggles.png',hoverimg:'assets/img/earphones.png',title:'Black RayBan Sunglass 2022 version',price:'$105'},
        {id:'3',defaultimg:'assets/img/shoes.png',hoverimg:'assets/img/earphones.png',title:'K-Swiss White Sports Shoe',price:'$105'},
        {id:'4',defaultimg:'assets/img/purse.png',hoverimg:'assets/img/earphones.png',title:'Brown Wooden Box Wallet',price:'$105'},
        {id:'5',defaultimg:'assets/img/ladies-purse.png',hoverimg:'assets/img/earphones.png',title:'Brown leather handbag exclusive',price:'$105'},
        {id:'6',defaultimg:'assets/img/tshirt.png',hoverimg:'assets/img/earphones.png',title:'Man Black Stylish T-shirt',price:'$105'},
        {id:'7',defaultimg:'assets/img/watch.png',hoverimg:'assets/img/earphones.png',title:'Timex Brown Leather Band Reading',price:'$105'},
        {id:'8',defaultimg:'assets/img/camera.png',hoverimg:'assets/img/earphones.png',title:'Canon AE-1 with Black and Gray',price:'$105'}

    ]
    const eleccollection = [];
    const dresscollection = [];
    const jewelcollection = [];
    const footcollection = [];
    const latest = [];

  for (var i=0;i<3;i++) {
    eleccollection.push(<div class="col-lg-4 col-md-6 col-12">
                <Product 
                       defaultimg={items[i].defaultimg}
                       hoverimg={items[i].hoverimg}
                       title={items[i].title}
                       price={items[i].price}
                />
              </div>)
  }
  for (var i=0;i<3;i++) {
    dresscollection.push(<div class="col-lg-4 col-md-6 col-12">
                <Product 
                       defaultimg={items[i].defaultimg}
                       hoverimg={items[i].hoverimg}
                       title={items[i].title}
                       price={items[i].price}
                />
              </div>)
  }
  for (var i=0;i<3;i++) {
    jewelcollection.push(<div class="col-lg-4 col-md-6 col-12">
                <Product 
                       defaultimg={items[i].defaultimg}
                       hoverimg={items[i].hoverimg}
                       title={items[i].title}
                       price={items[i].price}
                />
              </div>)
  }
  for (var i=0;i<3;i++) {
    footcollection.push(<div class="col-lg-4 col-md-6 col-12">
                <Product 
                       defaultimg={items[i].defaultimg}
                       hoverimg={items[i].hoverimg}
                       title={items[i].title}
                       price={items[i].price}
                />
              </div>)
  }
  for (var i=0;i<8;i++) {
    latest.push(<div class="col-lg-3 col-md-6 col-12">
                <Product 
                       defaultimg={items[i].defaultimg}
                       hoverimg={items[i].hoverimg}
                       title={items[i].title}
                       price={items[i].price}
                />
              </div>)
  }
    return(
        <div>
            <nav id="navbar_top" class="navbar navbar-expand-lg  navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/logo.svg" class="img-fluid" alt=""/>
                    </a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-trigger="navbar_main" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">

                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav">
                        <ul class="navbar-nav left-menu ms-auto me-auto">
                            <li class="nav-item"><a class="nav-link active" href="#"> Home  </a></li>
                            <li class="nav-item"><a class="nav-link" href="#"> Shop </a></li>
                            <li class="nav-item"><a class="nav-link" href="#"> Category </a></li>
                            <li class="nav-item"><a class="nav-link" href="#"> Contact </a></li>
                        </ul>
                        <ul class="navbar-nav right-menu ms-auto">
                            <li class="nav-item"><a data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">  <img src="assets/img/btn-search.svg" class="img-fluid" alt="" /> </a></li>
                            <li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Wishlist"> <img src="assets/img/btn-wish.svg" class="img-fluid" alt="" /> </a></li>
                            <li class="nav-item"><a class="nav-link m-cart" href="#"> <img src="assets/img/btn-cart.svg" class="img-fluid" alt="" /> <span>2</span> </a></li>
                        </ul>
                    </div> 
                </div> 
            </nav> 
            <section class="m-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-8 my-auto">
                            <div class="m-header-con">
                                <h1>We will help you find your <span>product</span></h1>
                                <p>Get special promo from our store and don't forget to join our social media for update</p>
                                <a href="#" class="btn btn-main">Explore Now</a>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-4">
                            <div class="main-img">
                                <img src="assets/img/main-man.png" class="img-fluid man" alt="" />
                                <img src="assets/img/circle-bg.svg" class="img-fluid circle-bg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="main-h">
                                <span class="m-sub">COLLECTION</span>
                                <h1 class="m-title">Our Top Collection</h1>
                            </div>
                        </div>
                        <div class="collection-tabs">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Electronics</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Jewellery</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dress</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="footwear-tab" data-bs-toggle="pill" data-bs-target="#pills-footwear" type="button" role="tab" aria-controls="pills-footwear" aria-selected="false">footwear</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="row">
                                        {eleccollection}
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div class="row">
                                        {jewelcollection}
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                    <div class="row">
                                        {dresscollection}
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-footwear" role="tabpanel" aria-labelledby="pills-footwear">
                                    <div class="row">
                                         {footcollection}
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
            <section class="latest-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="main-h">
                                <span class="m-sub">NEW ARRIVAL</span>
                                <h1 class="m-title">Latest Collections</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="gray-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 order-lg-1 order-md-1 order-2">
                                        <img src="assets/img/sweater.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="col-lg-8 col-md-8 order-lg-2 order-md-2 order-1">
                                        <div class="gray-box-con">
                                            <h2 class="g-title">2022 trend<br/> Man’s smart sweater</h2>
                                            <a href="#">Discover More +</a>
                                            <img src="assets/img/Line.svg" class="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <img src="assets/img/circle2.svg" class="img-fluid circle2" alt=""/>
                                </div>
                            </div>
                            <div class="pink-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 order-lg-1 order-md-1 order-2">
                                        <img src="assets/img/man2.png" class="img-fluid" alt=""/>
                                    </div>
                                    <div class="col-lg-8 col-md-8 order-lg-2 order-md-2 order-1">
                                        <div class="pink-box-con">
                                            <h2 class="p-title">2022 trend<br/> Man’s smart shirt</h2>
                                            <a href="#">Discover More +</a>
                                            <img src="assets/img/Line.svg" class="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <img src="assets/img/circle2.svg" class="img-fluid circle2" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 d-flex">
                            <div class="rust-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 order-lg-1 order-md-1 order-2">
                                        <img src="assets/img/man3.png" class="img-fluid man-3" alt=""/>
                                    </div>
                                    <div class="col-lg-8 col-md-8 order-lg-2 order-md-2 order-1">
                                        <div class="rust-box-con">
                                            <h2 class="r-title">2022 trend<br/> Man’s smart jacket</h2>
                                            <a href="#">Discover More +</a>
                                            <img src="assets/img/Line.svg" class="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                    <img src="assets/img/circle2.svg" class="img-fluid circle2" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="main-h">
                                <span class="m-sub">CATEGORIES</span>
                                <h1 class="m-title">2022 Latest Collections</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {latest}
                    </div>
                    <div class="row">
                        <div class="col-lg-12 mt-5 text-center">
                            <a href="#" class="btn btn-main">Load more <i class="fas fa-caret-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="stat-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="main-h">
                                <span class="m-sub">STATICS</span>
                                <h1 class="m-title">Our statics</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="stat-box text-center">
                                <div class="stat-icon">
                                    <img src="assets/img/stat-icon1.svg" class="img-fluid " alt=""/>
                                </div>
                                <div class="stat-con">
                                    <h4 class="stat-title">Easy order system</h4>
                                    <p class="stat-des">Lorem ipsum is placeholder text commonly used in the</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stat-box text-center">
                                <div class="stat-icon">
                                    <img src="assets/img/stat-icon2.svg" class="img-fluid " alt=""/>
                                </div>
                                <div class="stat-con">
                                    <h4 class="stat-title">On time Delivery</h4>
                                    <p class="stat-des">Lorem ipsum is placeholder text commonly used in the</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stat-box text-center">
                                <div class="stat-icon">
                                    <img src="assets/img/stat-icon3.svg" class="img-fluid " alt=""/>
                                </div>
                                <div class="stat-con">
                                    <h4 class="stat-title">100% Money Back Guarantee</h4>
                                    <p class="stat-des">Lorem ipsum is placeholder text commonly used in the</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="stat-box text-center">
                                <div class="stat-icon">
                                    <img src="assets/img/stat-icon4.svg" class="img-fluid " alt=""/>
                                </div>
                                <div class="stat-con">
                                    <h4 class="stat-title">24/7 Online Support</h4>
                                    <p class="stat-des">Lorem ipsum is placeholder text commonly used in the</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="main-h">
                                <span class="m-sub">BLOGS</span>
                                <h1 class="m-title">Latest news</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <a href="#" class="blog-box">
                                <div class="blog-img">
                                    <img src="assets/img/blog1.jpg" class="img-fluid" alt=""/>
                                </div>
                                <div class="blog-con">
                                    <span class="item-tag">Trendy</span>
                                    <h5 class="blog-title">Lorem ipsum is placeholder text commonly used in the</h5>
                                    <h6 class="blog-date">22 January 2022</h6>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a href="#" class="blog-box">
                                <div class="blog-img">
                                    <img src="assets/img/blog2.jpg" class="img-fluid" alt=""/>
                                </div>
                                <div class="blog-con">
                                    <span class="item-tag">Trendy</span>
                                    <h5 class="blog-title">Lorem ipsum is placeholder text commonly used in the</h5>
                                    <h6 class="blog-date">22 January 2022</h6>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <a href="#" class="blog-box">
                                <div class="blog-img">
                                    <img src="assets/img/blog3.jpg" class="img-fluid" alt=""/>
                                </div>
                                <div class="blog-con">
                                    <span class="item-tag">Trendy</span>
                                    <h5 class="blog-title">Lorem ipsum is placeholder text commonly used in the</h5>
                                    <h6 class="blog-date">22 January 2022</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;