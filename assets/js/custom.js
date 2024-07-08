let openCart = document.querySelector(".open-cart");
openCart.onclick = function openMyCart(){
    let cart = document.querySelector(".cart-wrap");
    cart.classList.toggle("active");
}


let addCart = document.querySelectorAll(".add-btn");
addCart.forEach((e)=>{
    e.onclick = function addToCart(){
        let addParent = e.parentElement;
        let parentOfParent = addParent.parentElement;
        let quantityBlock = parentOfParent.querySelector(".quantity-control");
        let getQuantity = parentOfParent.querySelector(".quantity-value");
        let getMinus = parentOfParent.querySelector(".minus");
        let getPlus = parentOfParent.querySelector(".plus");
        let productName = parentOfParent.querySelector(".product-name");
        let productPrice = parentOfParent.querySelector(".product-price");
        let cartProductDetails = document.querySelector(".cart-product-details");
        let cartDetailBlock = document.querySelector(".cart-detail-block");
        let totalValue = document.querySelector(".total-value");
        let cartIndicator = document.querySelector(".cart-indicator");
        let totalWrap = totalValue.parentElement;
        let noResult = document.querySelector(".no-result");
        cartIndicator.innerText = Number(cartIndicator.innerText)+1;
        getQuantity.innerText = 1;
        addParent.classList.add("active");
        quantityBlock.classList.add("active");
        noResult.classList.add("active");
        let clone = cartDetailBlock.cloneNode(true);
        cartProductDetails.appendChild(clone);
        totalWrap.classList.add("active");
        let cartProduct = clone.querySelector(".cart-product");
        let cartPrice = clone.querySelector(".cart-price");
        let quantityText = clone.querySelector(".quantity-text");
        quantityText.innerText = 1;
        cartProduct.innerText = productName.innerText;
        cartPrice.innerText = productPrice.innerText;
        totalValue.innerText = Number(totalValue.innerText)+Number( cartPrice.innerText);
        getMinus.onclick = function minusQuantity(){
            if(getQuantity.innerText>1){
                getQuantity.innerText = Number(getQuantity.innerText)-1;
                quantityText.innerText = getQuantity.innerText;
                cartPrice.innerText = Number(productPrice.innerText)*Number(quantityText.innerText);
                totalValue.innerText = Number(totalValue.innerText)-Number(productPrice.innerText);
            }
            else{
                addParent.classList.remove("active");
                quantityBlock.classList.remove("active");
                cartIndicator.innerText = Number(cartIndicator.innerText)-1;
                totalValue.innerText = Number(totalValue.innerText)-Number(productPrice.innerText);
                if(cartIndicator.innerText==0){
                    noResult.classList.remove("active");
                    totalWrap.classList.remove("active");
                }
                cartProductDetails.removeChild(clone);
            }
        }
        getPlus.onclick = function plusQuantity(){
            if(getQuantity.innerText>=1){
                getQuantity.innerText = Number(getQuantity.innerText)+1;
                quantityText.innerText = getQuantity.innerText;
                cartPrice.innerText = Number(productPrice.innerText)*Number(quantityText.innerText);
                totalValue.innerText = Number(totalValue.innerText)+Number(productPrice.innerText);
            }
        }
        
        
    }
})
