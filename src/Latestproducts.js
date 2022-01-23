
import Product from './Product';
function Latestproducts(){
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
    const latest = [];
    for (var i=0;i<6;i++) {
        latest.push(
                    <Product 
                           defaultimg={items[i].defaultimg}
                           hoverimg={items[i].hoverimg}
                           title={items[i].title}
                           price={items[i].price}
                    />
                 )
    }
    return(
        <div class="row">
                    <div class="col-lg-12">
                        <div class="featured-slider">
                            <div class="fadeOut custom2 owl-carousel owl-theme">
                              {latest}
                            </div>
                        </div>
                    </div>
        </div>
    )

}

export default Latestproducts;