
// main object
const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    }

]


// getting element from html
const div = document.querySelector('#div');

//cart items
let cartItems = [];

phones.map((item, index) => {
    div.innerHTML += `
    <div class="rounded border-solid border-2 border-grey-500 p-5 w-[20rem] ">
            <h3 class="text-2xl">Phone: ${item.brand} ${item.model}</h3>
            <h3 class="text-xl">Price: ${item.price}</h3>
            <button onclick="addToCart(${index})" class="bg-[#38bdf8] px-3 py-1 rounded mt-3">Add to cart</button>
    </div>
    `
})


function addToCart(index) {
    if (cartItems.indexOf(phones[index]) !== -1) {
        let indexNumber = cartItems.indexOf(phones[index]) 
        cartItems[indexNumber].quantity += 1;
        console.log(cartItems);
    } else {
        phones[index].quantity = 1
        cartItems.push(phones[index])
        console.log(cartItems);
    }
}


//checkout function
function checkout(){
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    window.location = 'checkout.html'
}