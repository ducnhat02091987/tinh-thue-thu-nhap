document.querySelector("#btn-tinh-thue").addEventListener("click", function () {
  var userValue = document.querySelector("#txt-user").value;
  var tongThuNhapNamValue =
    document.querySelector("#txt-tong-thu-nhap").value * 1;
  var nguoiPhuThuocValue =
    document.querySelector("#txt-nguoi-phu-thuoc").value * 1;
  var thuNhapChiuThue = tongThuNhapNamValue - 4 - nguoiPhuThuocValue * 1.6;
  var thueSuat;
  if (thuNhapChiuThue <= 60) {
    thueSuat = 5;
  } else if (thuNhapChiuThue <= 120) {
    thueSuat = 10;
  } else if (thuNhapChiuThue <= 210) {
    thueSuat = 15;
  } else if (thuNhapChiuThue <= 384) {
    thueSuat = 20;
  } else if (thuNhapChiuThue <= 624) {
    thueSuat = 25;
  } else if (thuNhapChiuThue <= 960) {
    thueSuat = 30;
  } else {
    thueSuat = 35;
  }

  document.querySelector("#txt-hien-thi-thue").style.display = "block";
  document.querySelector(
    "#txt-hien-thi-thue"
  ).innerHTML = `Thu nhập chịu thuế của <b>${userValue}</b> là: ${thuNhapChiuThue} (triệu) <br> Thuế suất là: ${thueSuat}%`;
});
