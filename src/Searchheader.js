
function Searchheader(){
    return (
        <div>
             <section class="header-2">
                <div class="header-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-4">
                                <a href="#"><i class="fas fa-mobile-alt"></i> Download Get2Go App</a>
                            </div>
                            <div class="col-lg-6 col-md-8 text-lg-end text-md-end">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a href="#">Support</a></li>
                                    <li class="list-inline-item"><a href="#">Store Locator</a></li>
                                    <li class="list-inline-item"><a href="#">Term & Condition</a></li>
                                    <li class="list-inline-item">
                                        <div class="dropdown">
                                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                My Account
                                            </a>

                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">My profile</a> </li>
                                                <li><a class="dropdown-item" href="#">My Orders</a></li>
                                                <li><a class="dropdown-item" href="#">Payment</a></li>
                                                <li><a class="dropdown-item" href="#">Logout</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-md-3 my-auto">
                                <a href="#"><img src="assets/img/Get2Go.png" class="img-fluid" alt=""/></a>
                            </div>
                            <div class="col-lg-8 col-md-6 my-auto">
                                <div class="search-area">
                                    <div class="input-group">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>All</option>
                                            <option value="1">Camera</option>
                                            <option value="2">Mobiles</option>
                                            <option value="3">Speaker</option>
                                            <option value="3">Shoes</option>
                                        </select>
                                        <input type="search" class="form-control light" placeholder="Search product..."/>
                                        <button class="btn btn-outline-secondary" type="button">
                                            <img src="assets/img/search-white.svg" alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 my-auto text-lg-end header2-right">
                                <ul class="list-inline">
                                    <li class="list-inline-item"><a  href="#"> <img src="assets/img/btn-wish.svg" class="img-fluid" alt=""/></a></li>
                                    <li class="list-inline-item"><a href="#" class="h2-cart"><img src="assets/img/btn-cart.svg" class="img-fluid" alt=""/><span>2</span></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Searchheader;