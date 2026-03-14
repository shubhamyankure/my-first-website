let products=[

{ name:"Line Follower Robot", price:1500, image:"images/line_follower.jpg" },
{ name:"Obstacle Avoiding Robot", price:2000, image:"images/robot.JPG" },
{ name:"Bluetooth Controlled Robot", price:2500, image:"images/robot.JPG" },
{ name:"Smart Irrigation System", price:3500, image:"images/irrigation.jpg" },
{ name:"RFID Attendance System", price:4500, image:"images/rfid.jpg" },
{ name:"Smart Helmet", price:5000, image:"images/helmet.jpg" },
{ name:"Gesture Control Robot", price:6000, image:"images/robot.JPG" },
{ name:"Smart Parking System", price:6500, image:"images/parking.jpg" },
{ name:"IoT Weather Station", price:8000, image:"images/weather.jpg" },
{ name:"Smart Home Automation", price:9000, image:"images/home.jpg" }

];

let container=document.getElementById("products");

products.forEach(p=>{

container.innerHTML+=`

<div class="card" data-name="${p.name.toLowerCase()}">

<img src="${p.image}">

<h3>${p.name}</h3>

<p class="price">₹${p.price}</p>

<button onclick="getInfo('${p.name} ₹${p.price}')">Get Info</button>

</div>

`

});

function getInfo(product){

let msg="Hi I want information about "+product

window.open("https://wa.me/917276057489?text="+encodeURIComponent(msg))

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase()

let cards=document.querySelectorAll(".card")

cards.forEach(c=>{

let name=c.getAttribute("data-name")

if(name.includes(input)){
c.style.display="block"
}else{
c.style.display="none"
}

})

}
