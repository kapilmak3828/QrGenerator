function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    let Qrcode = new QRCode(qrcodeContainer, {
      text: website,
      width: 200,
      height: 200,
      colorDark: "black",
      colorLight: "transparent",
      correctLevel: QRCode.CorrectLevel.H,
    });
  } else {
    alert("Please enter a valid URL");
  }
}
