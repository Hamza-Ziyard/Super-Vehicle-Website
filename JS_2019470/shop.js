if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', runScript)
    }
    else{
    runScript()
    }



function runScript(){

  // Removing the cart items with the remove button

    var removeItems = document.getElementsByClassName('Remove')
    for (var i = 0; i < removeItems.length; i++)  {
        var button = removeItems[i]
        button.addEventListener('click', removingItems)
    }


  // changing the Quantity value

    var quantity = document.getElementsByClassName('Quantity')
    for (var i = 0; i < quantity.length; i++ ){
        var quantityInput = quantity[i]
        quantityInput.addEventListener('change', changingQuantity)
    }


    var addCartItems = document.getElementsByClassName('add-to-cart-button')
    for (var i = 0; i < addCartItems.length; i++ ){
        var button = addCartItems[i]
        button.addEventListener('click', addingToCart)
    }


    var purchase = document.getElementsByClassName('purchase')[0]
    purchase.addEventListener('click', purchaseCartItems)
}



// Function to remove items
function removingItems(event){
    var buttonTask = event.target
    buttonTask.parentElement.remove()
    cartTotalUpdate()
}



// Function to change the Quantity value

function changingQuantity(event){
    var changeTask = event.target
    if (isNaN(changeTask.value) || changeTask.value <= 0){
        changeTask.value = 1
    }
     cartTotalUpdate()
}


// Function for adding items to the cart

function addingToCart(event){
    var button = event.target
    var addingProduct = button.parentElement.parentElement
    var productNo = addingProduct.getElementsByClassName('product-no')[0].innerText
    var productPrice = addingProduct.getElementsByClassName('shop-product-price')[0].innerText
    var productImage = addingProduct.getElementsByClassName('shop-product-image')[0].src
    var productTitle = addingProduct.getElementsByClassName('shop-product-desc')[0].innerText
    addingNewItemsToCart(productNo, productPrice, productImage,productTitle)
    cartTotalUpdate()

    }

//Function for adding new items to the cart

function addingNewItemsToCart(productNo, productPrice, productImage,productTitle){
    var newCartRow = document.createElement('div')
    var cartList = document.getElementsByClassName('cart-products')[0]
    var cartListTitle = cartList.getElementsByClassName('cart-product-desc')
    for (var i = 0; i < cartListTitle.length; i++ ){
        if (cartListTitle[i].innerText == productNo){
            swal(" ","This product is already added to the cart","error !");
            return
        }
    }
    var cartItemDetails = `
        <div class="cart-product">
            <img class="cart-image" src="${productImage}">
            <span class="cart-image-desc" id = "cartImageDesc">${productTitle}</span>
            <span class="cart-image-price"  id = "cartImagePrice">${productPrice}</span>
            <input class="Quantity" type="number" value="1">
            <span class ="cart-product-desc">${productNo}</span>
            <button class="Remove" id ="remove" type="button">X</button>
        </div> `

    newCartRow.innerHTML = cartItemDetails
    cartList.append(newCartRow)
    newCartRow.getElementsByClassName('Remove')[0].addEventListener('click', removingItems)
    newCartRow.getElementsByClassName('Quantity')[0].addEventListener('change', changingQuantity)



}

// Function for updating the cart total

function cartTotalUpdate(){

    var cartRowsContainer = document.getElementsByClassName('cart-products')[0]
    var cartRows = document.getElementsByClassName('cart-product')
    var totalPrice = 0
    for (var i = 0; i < cartRows.length; i++)  {
    var cartRow = cartRows[i]
    var cartRowPrice = cartRow.getElementsByClassName('cart-image-price')[0]
    var cartRowQuantity = cartRow.getElementsByClassName('Quantity')[0]
    var price = parseFloat(cartRowPrice.innerText.replace('$' , ''))
    var quantity = cartRowQuantity.value
    totalPrice = totalPrice + (price * quantity)



    }
    totalPrice = Math.round(totalPrice * 100) / 100
    document.getElementsByClassName('Total')[0].innerText = '$' + totalPrice

}



function purchaseCartItems(){

   
    
    var itemArray = new Array()
    var quantityArray = new Array()
    var priceArray = new Array()
    var outputArray = new Array()

    var cartList = document.getElementsByClassName('cart-products')[0]
    var cartListTitle = cartList.getElementsByClassName('cart-image-desc')

    var clientName = document.getElementsByClassName('personal-details')[0].value
        if( cartListTitle.length == 0  ){
            swal("empty cart","You haven't purchased any items","info")
            var clientName = document.getElementsByClassName('personal-details')[0].value
           
        }
        else if (clientName == '' || clientName == null){
            swal("invalid credentials",'Please enter your name', "error !")
            
        }
       

        else{
    
        for (var i = 0; i < cartListTitle.length; i++ ){
            var productName = cartListTitle[i].innerText
            itemArray[i] = " " + productName
        
            var itemQuantity = cartList.getElementsByClassName('Quantity')
            var quantityValue = itemQuantity[i].value
            quantityArray[i] = " "+ quantityValue

            var cartListPrice = cartList.getElementsByClassName('cart-image-price')
            priceArray[i] = " " + cartListPrice[i].innerText

        
            outputArray[i] =  quantityArray[i] + " " + itemArray[i] +"(s)" + " " + "of each" + " " + priceArray[i] + "\n"
        
        
        
       swal("purchased item details",'dear'+ " " + clientName + " " + 'you have purchased a '+ " " +outputArray,"success")
      

       }

       
    }
 
 

    
}
