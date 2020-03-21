// nav bar toggle
const navBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");

navBtn.addEventListener("click", function() {
  menu.classList.toggle("active");
});

//date picker setup
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

user.forEach(function(item) {
  item.addEventListener("mouseover", function(e) {
    //hàm bounding client rect dùng để lấy thông tin tọa độ tuyệt đối của thẻ html
    x = item.getBoundingClientRect().x + item.getBoundingClientRect().width;
    y = item.getBoundingClientRect().y;
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
    <p class="user-info-username">Họ và tên: ${username}</p>
    <p class="user-info-rank">Cấp bậc: ${rank}</p>
    <p class="user-info-money">Tiền đầu tư: ${money}</p>
    <p class="user-info-address">Địa chỉ: ${address}</p>`;
    //append the vua tao vao pop up
    userPopup.innerHTML = popupContent;
  });

  item.addEventListener("mouseout", function() {
    userPopup.style.opacity = "0";
  });
});

////date time header

const dateHeader = document.querySelector(".header-left__date-time");

function getTime() {
  let date = new Date();
  let clock = date.toTimeString().split(" ")[0];
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  dateHeader.textContent = day + "." + month + "." + year + " " + clock;
}

let count = setInterval(function() {
  getTime();
}, 1000);
getTime();

/// product increment
let productIncrementBtn = document.querySelectorAll(".incrBtn");
let productDescrementBtn = document.querySelectorAll(".descBtn");

function descProduct(item) {
  let count = parseInt(item.parentNode.childNodes[3].value);
  if (count > 0) {
    item.parentNode.childNodes[3].value = count - 1;
  }
}

function incrProduct(item) {
  let count = parseInt(item.parentNode.childNodes[3].value);
  item.parentNode.childNodes[3].value = count + 1;
}

productDescrementBtn.forEach(item => {
  item.addEventListener("click", function() {
    let count = descProduct(this);
  });
});

productIncrementBtn.forEach(item => {
  item.addEventListener("click", function() {
    incrProduct(this);
  });
});
