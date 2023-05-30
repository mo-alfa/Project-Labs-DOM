
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const tmenuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}
const parent = document.getElementsByClassName("parents")
//let priceT = document.getElementsByClassName("priceT")
let totalAmount = document.getElementById("pricett")
//console.log(parent);

for(let i = 0; i < parent.length; i++) {
    let btnPlus = parent[i].children[1].children[0].children[0]
    let quantity = parent[i].children[1].children[0].children[1]
    let qty = +(quantity.innerText)
    let btnMoins = parent[i].children[1].children[0].children[2]

    let priceunit = +(parent[i].children[0].children[0].children[1].children[2]).innerHTML
    let priceT = parent[i].children[1].children[1].children[0]
    // console.log(priceT);



    btnPlus.addEventListener("click", function () {
        
        qty++;
        quantity.innerHTML = qty
        priceT.innerText = qty * priceunit
        sum()
    })

    btnMoins.addEventListener("click", function () {
        
        qty--;
        if (qty <= 0) {
            qty = 0
        }
        quantity.innerHTML = qty
        priceT.innerText = qty * priceunit
        sum()
    })

}
function sum() {
    let totalUnitAmount = document.getElementsByClassName('priceT')
    let totalPrice = 0;
    for (let i = 0; i < totalUnitAmount.length; i++) {
        totalPrice += parseInt(totalUnitAmount[i].innerText)
    }
    totalAmount.innerText = totalPrice;
}

let validate = document.getElementById('btntt')
validate.addEventListener('click', function () {
    alert("Success validate!")
    window.location.href = "index.html"
})

