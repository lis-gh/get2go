import Latestproducts from './Latestproducts';
import Searchheader from './Searchheader';
import Product from './Product';

function Searchproduct(){
    let items=[
        {id:'1',defaultimg:'assets/img/earphones.png',hoverimg:'assets/img/earphones.png',title:'Apple Airpods - Airpod Gray Colorways',price:'$105'},
        {id:'2',defaultimg:'assets/img/goggles.png',hoverimg:'assets/img/earphones.png',title:'Black RayBan Sunglass 2022 version',price:'$105'},
        {id:'3',defaultimg:'assets/img/shoes.png',hoverimg:'assets/img/earphones.png',title:'K-Swiss White Sports Shoe',price:'$105'},
        {id:'4',defaultimg:'assets/img/purse.png',hoverimg:'assets/img/earphones.png',title:'Brown Wooden Box Wallet',price:'$105'},
        {id:'5',defaultimg:'assets/img/ladies-purse.png',hoverimg:'assets/img/earphones.png',title:'Brown leather handbag exclusive',price:'$105'},
        {id:'6',defaultimg:'assets/img/tshirt.png',hoverimg:'assets/img/earphones.png',title:'Man Black Stylish T-shirt',price:'$105'},
        {id:'7',defaultimg:'assets/img/watch.png',hoverimg:'assets/img/earphones.png',title:'Timex Brown Leather Band Reading',price:'$105'},
        {id:'7',defaultimg:'assets/img/watch.png',hoverimg:'assets/img/earphones.png',title:'Timex Brown Leather Band Reading',price:'$105'},
        {id:'8',defaultimg:'assets/img/camera.png',hoverimg:'assets/img/earphones.png',title:'Canon AE-1 with Black and Gray',price:'$105'}

    ]
    const latest = [];
    for (var i=0;i<9;i++) {
        latest.push(
            <div class="col-lg-4 col-md-6 col-12">
            <Product 
                   defaultimg={items[i].defaultimg}
                   hoverimg={items[i].hoverimg}
                   title={items[i].title}
                   price={items[i].price}
            />
          </div>
                 )
    }

    return (
        <div>
            <a class="btn btn-filter" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="fas fa-sliders-h"></i></a>
            <Searchheader/>  
            <section class="m-brd">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"> <img src="assets/img/Line8.png" alt=""/></li>
                                    <li class="breadcrumb-item active" aria-current="page">Search Products</li>
                                </ol>
                            </nav>    

                        </div>
                    </div>
                </div>
            </section>
            <section class="filter-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <button type="button" class="btn-close offcan-btn text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <div class="ms-sidebar">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Categories
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"  >
                                            <div class="accordion-body">
                                                <ul class="list-unstyled cat-list">
                                                    <li><a href="#">Best Seller <span>(07)</span></a></li>
                                                    <li><a href="#">Cell Phones <span>(01)</span></a></li>
                                                    <li><a href="#">Headphones <span>(04)</span></a></li>
                                                    <li><a href="#">Sunglasses <span>(03)</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Clear filter
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo"  >
                                            <div class="accordion-body">
                                                <a href="#" class="link-a">Clear All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Price
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree"  >
                                            <div class="accordion-body">                                     
                                                <div id="slider-range"></div>
                                                <input type="text" id="amount" readonly disabled />
                                                <label for="amount"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Brands
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour"  >
                                            <div class="accordion-body">                                     
                                                <input type="text" class="form-control brand-search" id="myInput" onkeyup="myFunction()" placeholder="Search Brands..." title="Type in a name"/>
                                                <ul class="list-unstyled brand-list" id="myUL">
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                                            <label class="form-check-label" for="defaultCheck1">
                                                                Apple
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                                            <label class="form-check-label" for="defaultCheck2">
                                                                Lenovo
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                                                            <label class="form-check-label" for="defaultCheck3">
                                                                Samsung
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                                            <label class="form-check-label" for="defaultCheck4">
                                                                Vivo
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
                                                            <label class="form-check-label" for="defaultCheck5">
                                                                Oppo
                                                            </label>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingFive">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Colors
                                            </button>
                                        </h2>
                                        <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive">
                                            <div class="accordion-body">                                     
                                                <input type="text" class="form-control brand-search" id="myColorInput" onkeyup="myColorFunction()" placeholder="Search Colors..." />
                                                <ul class="list-unstyled brand-list" id="myColors">
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="cdefaultCheck1"/>
                                                            <label class="form-check-label" for="cdefaultCheck1">
                                                                Black
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="cdefaultCheck2"/>
                                                            <label class="form-check-label" for="cdefaultCheck2">
                                                                Yellow
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="cdefaultCheck3"/>
                                                            <label class="form-check-label" for="cdefaultCheck3">
                                                                Purple
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="cdefaultCheck4"/>
                                                            <label class="form-check-label" for="cdefaultCheck4">
                                                                Red
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="cdefaultCheck5"/>
                                                            <label class="form-check-label" for="cdefaultCheck5">
                                                                White
                                                            </label>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingSix">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Tags
                                            </button>
                                        </h2>
                                        <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix">
                                            <div class="accordion-body">                                     
                                                <input type="text" class="form-control brand-search" id="myTagsInput" onkeyup="myTagsFunction()" placeholder="Search Colors..." />
                                                <ul class="list-unstyled brand-list" id="myTags">
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="tdefaultCheck1"/>
                                                            <label class="form-check-label" for="tdefaultCheck1">
                                                                Mobile
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="tdefaultCheck2"/>
                                                            <label class="form-check-label" for="tdefaultCheck2">
                                                                Smart Watch
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="tdefaultCheck3"/>
                                                            <label class="form-check-label" for="tdefaultCheck3">
                                                                Headphone
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="tdefaultCheck4"/>
                                                            <label class="form-check-label" for="tdefaultCheck4">
                                                                Earphone
                                                            </label>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <input class="form-check-input" type="checkbox" value="" id="cdefaultCheck5"/>
                                                            <label class="form-check-label" for="cdefaultCheck5">
                                                                iPad
                                                            </label>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="right-bar">
                                <div class="search-products">
                                    <h1 class="p-pro">Products</h1>
                                </div>
                                <div class="row">
                                    <div class="col-lg-7 col-12 my-auto">
                                        <p class="product-num">Showing 1 - 9 of 24 results</p>
                                    </div>
                                    <div class="col-lg-5 col-12 my-auto">
                                        <div class="sort-filter">

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Best Selling</option>
                                                <option value="1">Trending</option>
                                                <option value="2">Newly Added</option>
                                            </select>


                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Show 9</option>
                                                <option value="1">Show 18</option>
                                                <option value="2">Show 27</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <hr class="right-hr"/>    
                                <div class="row mt-5">
                                    {latest}
                                </div>
                                <hr class="right-hr"/>    
                                <div class="row">
                                    <div class="col-lg-6 col-12 my-auto">
                                        <p class="product-num">Showing 1 - 9 of 24 results</p>
                                    </div>
                                    <div class="col-lg-6 col-12 my-auto">
                                        <nav class="pt-pagination" aria-label="Page navigation example">
                                            <ul class="pagination justify-content-lg-end  justify-content-md-end">

                                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">Next <img src="assets/img/Line8.png" alt=""/></a>

                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <hr class="right-hr"/>    
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
export default Searchproduct;