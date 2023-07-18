const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const marketCarMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');



menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
marketCarMenu.addEventListener('click', toggleMarketCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed =  shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    const isProductDetailClosed =  productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const isAsideClosed =  shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    const isProductDetailClosed =  productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');

}

function toggleMarketCarAside(){

    const isDesktopMenuClosed =  desktopMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }



const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed =  productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }




    shoppingCartContainer.classList.toggle('inactive');
 /*    aside.classList.toggle('inactive') */


}

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/



function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
name: 'Bike',
price: '1200',
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
name: 'Car',
price: '5200',
image: 'https://pxc.cdn.ellitoral.com.ar/litoral/062023/1686366169470.jpeg',
});
productList.push({
name: 'PS5',
price: '500',
image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/04/ps5-3011390.jpg?tf=3840x',
});
productList.push({
name: 'House',
price: '12000',
image: 'https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg',
});
productList.push({
    name: 'PC Gamer',
    price: '900',
    image: 'https://www.megatecnologia.com.ar/images/1681763250427.jpg',
    });
productList.push({
    name: 'Smart TV',
    price: '500',
    image: 'https://www.infobae.com/new-resizer/NX6__EFLEge4whDjxjRKsvKzv64=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/Q7HEZAAX7FBBHE2FNZUEEWQJBQ.jpg',
    });
productList.push({
        name: 'Laptop Mac',
        price: '700',
        image: 'https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg',
        });
    
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);

        
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);
productDetailCloseIcon.getAttribute()