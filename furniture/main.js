
document.addEventListener('DOMContentLoaded', () => {
    
    const burgerBtn = document.getElementById("burger-btn");
    const headerMenu = document.querySelector(".header-menu");

    if(burgerBtn && headerMenu){
        burgerBtn.addEventListener("click", ()=> {
            headerMenu.classList.toggle('open');
        })
    }

});



// cart


const PadlockIcon = document.getElementById("PadlockIcon");
const Cost = document.getElementById("Cost"); 

PadlockIcon.addEventListener("click", cart);
Cost.addEventListener("click", cart);


// PadlockIcon.addEventListener("click", ()=>{


//     const cartDiv = document.createElement("div");
//     cartDiv.classList.add("cartDiv");

//     cartDiv.innerHTML = `

//     <button class="closeButton">    
//     <img src= "./photo/close.png" alt="Close">
//     </button>   

//     <div class="cartHeader">
//         <img src= "./photo/lock.png" alt="Lock Icon" class="cartIcon">
//         <h2>Cart </h2>
//     </div>

//     <div class="cartEmpty">
//         <img src= "./photo/lock.png" alt="Lock Icon" >
//         <h2>Your cart is currently empty.</h2>
//     </div>


// <div class=scdDiv>   
//     <div class="subtotal">
//     <span>Subtotal:</span>
//     <span>$0.00</span>
//     </div>

//     <div class="total">
//     <span class ="ttl">Total:</span>
//     <span>$0.00</span>
//     </div>

    
//     <div class="viewCart">
    
//     <button class="Button">    
//     Proceed to checkout
//     </button> 
//     <span> View cart</span>
//     </div> 
    
// </div>`



//     document.body.appendChild(cartDiv);

//     const closeBtn = document.querySelector(".closeButton");
//     closeBtn.addEventListener("click", ()=>{
//         cartDiv.remove();
//     })
// });



function cart(){
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cartDiv");

    cartDiv.innerHTML = `

    <button class="closeButton">    
    <img src= "./photo/close.png" alt="Close">
    </button>   

    <div class="cartHeader">
        <img src= "./photo/lock.png" alt="Lock Icon" class="cartIcon">
        <h2>Cart </h2>
    </div>

    <div class="cartEmpty">
        <img src= "./photo/lock.png" alt="Lock Icon" >
        <h2>Your cart is currently empty.</h2>
    </div>


<div class=scdDiv>   
    <div class="subtotal">
    <span>Subtotal:</span>
    <span>$0.00</span>
    </div>

    <div class="total">
    <span class ="ttl">Total:</span>
    <span>$0.00</span>
    </div>

    
    <div class="viewCart">
    
    <button class="Button">    
    Proceed to checkout
    </button> 
    <span> View cart</span>
    </div> 
    
</div>`



    document.body.appendChild(cartDiv);

    const closeBtn = document.querySelector(".closeButton");
    closeBtn.addEventListener("click", ()=>{
        cartDiv.remove();
    })
}



const userIcon = document.getElementById("userIcon");

userIcon.addEventListener("click", ()=>{
    const user = document.createElement("div");
    user.classList.add("user");
    user.innerHTML = `
    <div class = "hdr">
    <h2>Login</h2>
    <img src= "./photo/close.png" alt="Close">
    </div>

    <div class="Registration">
        <div class="input-with-icon">
            <img src= "./photo/user.png" alt="user">
            <input type="text" placeholder="Username or email * ">
        </div>

        <div class="input-with-icon">
            <img src= "./photo/ბოქლომი.png" alt="lock">
            <input type="text" placeholder="Password *">
        </div>
        </div>    
        <div class= "chckbox" >
            <input type="checkbox" id="rememberMe" name="remember" value="yes">
            <label for="rememberMe">Remember me</label>
        </div>

        <div class="login">
            <button class="bt">    
                Login
            </button> 
            <span>Lost your password?</span>
        </div> 
        `

    document.body.appendChild(user);

    const cBtn = document.querySelector(".hdr");
    cBtn.addEventListener("click", ()=>{
        user.remove();
    })
})





// const menuItem = document.querySelectorAll(".icon");

// menuItem.forEach((menuItem) => {

//     menuItem.addEventListener('mouseenter', ()=>{
//         menuItem.src = './photo/tekol.png';
        
//     });
    
//     menuItem.addEventListener('mouseleave', ()=>{
//         menuItem.src = './photo/chairs-icon.png';
//     })
// })





const chairs = document.getElementById("CHAIRS");
let chair;

chairs.addEventListener("mouseenter", ()=>{

    if(!chair){

        chair = document.createElement("div");
        chair.classList.add("chair");
        chair.innerHTML = `
        <div class = "menu-wrapper">
        <div class = "chairSubmenu">
            <span>ARMCHAIRS<img src= "./photo/right-arrow.png" alt="right-arrow"></span>
            <span>BAR STOOLS<img src= "./photo/right-arrow.png" alt="right-arrow"></span>
            <span>CHAIR PADS<img src= "./photo/right-arrow.png" alt="right-arrow"></span>
            <span>CHAISE LOUNGES<img src= "./photo/right-arrow.png" alt="right-arrow"></span>
            <span>CHAISE LOUNGES<img src= "./photo/right-arrow.png" alt="right-arrow"></span>
            <span>DINING CHAIRS<img src= "./photo/right-arrow.png" alt="right-arrow"></span>
        </div>

        <div class= "recommendation-box">
        <img src= "./photo/chairforsubmenu.png" alt="chair">
        <span>WE RECOMMEND</span>
        <span>Fancy chair</span>
        <span>Rutrum non id sem turpis elementum vel id. Magna.</span>
        <span>$1550.00</span>

        </div>
        </div>
        
        `;


        document.body.appendChild(chair);
        // document.section.classList.add("darken") სექციებს აიდიები დააამატე დაიჭირე აიდით და მერე შეუცვლა კლასი

        chair.addEventListener("mouseleave", handleMouseLeave)
        // chair.addEventListener("mouseenter", ()=>{

        // })
    }
})
    
function handleMouseLeave(){
    setTimeout(()=>{
        if(
            // (!chair.matches(":hover"))&&
            // !chair || !chair.matches(":hover")
            (!chair || (!chair.matches(":hover") && !chairs.matches(":hover")))
        ){
            if(chair){
                chair.remove()
                chair= null
            }
        }
    }, 150)
}

chairs.addEventListener("mouseleave", handleMouseLeave);

// chairs.addEventListener("mouseleave", () => {

//     setTimeout(() =>{
//         const chair = document.querySelector(".chair");
//         if(chair && !chair.matches(":hover") && !chair.matches(":hover")){
    
//             chair.remove();
//         }

//     }, 200)
    
//   });



// document.body.addEventListener("mouseleave", ()=>{
//     const chair = document.querySelector(".chair");
//     if(chair) chair.remove();
// })
























































































// const chairs = document.getElementById("CHAIRS");
// let chair; // გლობალურად გამოვაცხადოთ, რომ შემდეგ შევამოწმოთ

// function createChair() {
//   if (!chair) {
//     chair = document.createElement("div");
//     chair.classList.add("chair");
//     chair.innerHTML = `
//       <div class="frstDiv">
//         <span>ARMCHAIRS<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>BAR STOOLS<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>CHAIR PADS<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>CHAISE LOUNGES<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>CHAISE LOUNGES<img src="./photo/right-arrow.png" alt="right-arrow"></span><br>
//         <span>DINING CHAIRS<img src="./photo/right-arrow.png" alt="right-arrow"></span>
//       </div>
//     `;
//     document.body.appendChild(chair);

//     // მივამაგროთ .chair-ზეც mouseleave
//     chair.addEventListener("mouseleave", handleMouseLeave);
//     chair.addEventListener("mouseenter", () => {
//       // არაფერს ვაკეთებთ, უბრალოდ ხელს ვუშლით გაქრობას
//     });
//   }
// }

// function handleMouseLeave() {
//   setTimeout(() => {
//     if (
//       !chairs.matches(":hover") &&
//       (!chair || !chair.matches(":hover"))
//     ) {
//       if (chair) {
//         chair.remove();
//         chair = null;
//       }
//     }
//   }, 150);
// }

// chairs.addEventListener("mouseenter", createChair);
// chairs.addEventListener("mouseleave", handleMouseLeave);
