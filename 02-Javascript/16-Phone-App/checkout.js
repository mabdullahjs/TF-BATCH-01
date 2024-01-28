let items = localStorage.getItem('cartItems');
let data = JSON.parse(items);

console.log(data);


const div = document.querySelector('.div');
const total = document.querySelector('.total');

function renderItems(){
    div.innerHTML = ''
    let totalAmount = 0
    data.map((item , index) => {
        totalAmount += item.price * item.quantity

        div.innerHTML += `
        <div class="m-5">
        <div >Phone: ${item.brand} ${item.model}</div>
        <div>Price: ${item.price * item.quantity}</div>
        <button class="bg-[#38bdf8] px-2 py-1 rounded mt-3" onclick="decrease(${index})">-</button>
        <span class="text-2xl" id="quantity">${item.quantity}</span>
        <button class="bg-[#38bdf8] px-2 py-1 rounded mt-3" onclick="increase(${index})" >+</button>
        </div>
        <hr/>
        `
    })
    
    total.innerHTML = totalAmount;
    // console.log(total);
}

renderItems()

let quantity = document.querySelector('#quantity');

function decrease (index){
    if(data[index].quantity === 0){
        data.splice(index , 1)
    }else{
        data[index].quantity -= 1;
    }
    localStorage.setItem('cartItems' , JSON.stringify(data))
    renderItems()
}
function increase (index){
    data[index].quantity += 1;  
    localStorage.setItem('cartItems' , JSON.stringify(data))
    renderItems()
}


