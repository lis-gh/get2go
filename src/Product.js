 
function Product(props){
    return(
        <div>
            <div class="product-box">
                  <div class="product-action">
                         <ul class="list-unstyled">
                              <li><a class="wish" href="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Wishlist"><img src="assets/img/heart.svg" alt="" /></a></li>
                              <li><a class="cart" href="#" data-bs-toggle="tooltip" data-bs-placement="left" title="Add To Cart"><img src="assets/img/cart.svg" alt="" /></a></li>
                         </ul>
                  </div>
                  <div class="product-img">
                      <a class="img-link" href="#">
                           <img src={props.defaultimg} class="img-fluid default-img" alt=""/>
                           <img src={props.hoverimg} class="img-fluid hover-img" alt=""/>
                           <img src="assets/img/shadow.svg" class="img-fluid " alt=""/>
                      </a>
                  </div>
                  <div class="product-des">
                        <a href="#" class="product-title">{props.title}</a>
                        <div class="row price-row">
                            <div class="col-5 my-auto">
                                 <h6 class="product-price">{props.price}</h6>
                            </div>
                            <div class="col-7 my-auto text-end">
                               <div class="product-rating">
                                  <span class="fas fa-star checked"></span>
                                  <span class="fas fa-star checked"></span>
                                  <span class="fas fa-star checked"></span>
                                  <span class="fas fa-star checked"></span>
                                  <span class="fas fa-star"></span>
                               </div>
                            </div>
                        </div>
                   </div>

            </div>

        </div>
    )
}

export default Product;