
function Footer() {
    return(
        <footer class="m-footer ">
        <div class="container ">
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="logo-widget">
                        <img src="assets/img/logo.svg" class="img-fluid" alt=""/>
                        <ul class="list-inline mt-5 mb-5">
                            <li class="list-inline-item"><a target="_blank" href="#"><img src="assets/img/app-store-badge.png" alt=""/></a> </li>
                            <li class="list-inline-item"><a target="_blank" href="#"><img src="assets/img/google-play-badge.png" alt=""/></a> </li>
                        </ul>
                        <p>If you are going to use of Lorem Ipsum need to be sure there isn’t hidden of text.</p>
                        <ul class="list-inline footer-social">
                            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-snapchat-ghost"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-widget">
                        <h6 class="widget-title">Useful Links</h6>
                        <ul class="list-unstyled widget-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Location</a></li>
                            <li><a href="#">Affiliates</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-widget">
                        <h6 class="widget-title">Category</h6>
                        <ul class="list-unstyled widget-links">
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Woman</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Best Seller</a></li>
                            <li><a href="#">New Arrivals</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-widget">
                        <h6 class="widget-title">My Account</h6>
                        <ul class="list-unstyled widget-links">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Discount</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Orders History</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget">
                        <h6 class="widget-title">Contact Info</h6>
                        <ul class="list-unstyled address-list">
                            <li><p>123 Street, Old Trafford, London, UK </p></li>
                            <li><p>info@sitename.com</p></li>
                            <li><p>+ 457 789 65</p></li>
                            <li><p>WE ACCEPT</p></li>
                        </ul>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <img src="assets/img/ic-visa.png" class="img-fluid" alt=""/>
                            </li>
                            <li class="list-inline-item">
                                <img src="assets/img/ic-master-card.png" class="img-fluid" alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade search-modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="search-block clearfix">
                        <form>
                            <div class="form-group">
                                <input class="form-control" placeholder="Search Here..." type="text" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>   
  
        
    )
}

export default Footer;


     