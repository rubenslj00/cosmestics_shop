// nav bar toggle
const navBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

navBtn.addEventListener("click", function() {
  menu.classList.toggle("active");
});

// date picker setup
$(function() {
  $('input[name="from_date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true
  });

  $('input[name="to_date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true
  });
});

//// tree view
const userPopup = document.querySelector(".info-popover");
const user = document.querySelectorAll(".user-info");

console.log(userPopup);

user.forEach(function(item) {
  console.log(user);
  item.addEventListener("mouseover", function(e) {
    item.clientLeft;
    x = e.clientX;
    y = e.clientY;
    userPopup.style.top = `${y}px`;
    userPopup.style.left = `${x}px`;
    userPopup.style.opacity = "1";

    //lay du lieu tu khach
    let fullname = item.getAttribute("full-name");
    let username = item.getAttribute("username");
    let rank = item.getAttribute("rank");
    let money = item.getAttribute("money");
    let address = item.getAttribute("address");

    // tao the html chua du lieu
    let popupContent = `<h3 class="user-info-name">${fullname}</h3>
    <p class="user-info-username">${username}</p>
    <p class="user-info-rank">${rank}</p>
    <p class="user-info-money">${money}</p>
    hello
    <p class="user-info-address">${address}</p>`;
    //append the vua tao vao pop up
    userPopup.innerHTML = popupContent;
  });

  item.addEventListener("mouseout", function() {
    userPopup.style.opacity = "0";
  });
});
