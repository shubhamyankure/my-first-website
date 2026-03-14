let products=[
// Name, Price, Image Filename, Description
{ name:"Line Follower Robot", price:1500, image:"line_follower_robot.jpg", desc:"A robot that follows a black line using IR sensors." },
{ name:"Obstacle Avoiding Robot", price:2000, image:"obstacle_avoiding_robot.jpg", desc:"A robot that avoids obstacles automatically using ultrasonic sensors." },
{ name:"Bluetooth Controlled Robot", price:2500, image:"bluetooth_robot.jpg", desc:"Control your robot via Bluetooth using a mobile phone." },
{ name:"Smart Irrigation System", price:3500, image:"smart_irrigation.jpg", desc:"Automates watering of plants based on soil moisture." },
{ name:"RFID Attendance System", price:4500, image:"rfid_attendance.jpg", desc:"Attendance system using RFID cards for schools or offices." },
// Add all remaining 55 projects similarly
];

let container=document.getElementById("products");

products.forEach(p=>{
  container.innerHTML+=`
    <div class="card" data-name="${p.name.toLowerCase()}">
      <img src="images/${p.image}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <button onclick="getInfo('${p.name}','${p.price}','${p.image}','${p.desc}')">Get Info</button>
    </div>
  `;
});

function getInfo(name, price, img, desc){
  window.open(`info.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}&desc=${encodeURIComponent(desc)}`, "_blank");
}

function searchProduct(){
  let input=document.getElementById("search").value.toLowerCase();
  let cards=document.querySelectorAll(".card");
  cards.forEach(c=>{
    let name=c.getAttribute("data-name");
    c.style.display=name.includes(input) ? "block" : "none";
  });
}
