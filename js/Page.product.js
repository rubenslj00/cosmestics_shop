const moreBtn = document.querySelectorAll(".more-item");

moreBtn.forEach(item => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(this);
    Swal.fire({
      position: "top-end",
      icon: "",
      title: "Thông báo </br> Bạn đã thêm thành công sản phẩm vào giỏ",
      showConfirmButton: false,
      timer: 1500
    });
  });
});
