let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
};

document
  .querySelector("#btnSend")
  .addEventListener("click", sendMessage, false);

function sendMessage() {
  if (
    document.querySelector("#name").value != "" &&
    document.querySelector("#email").value != "" &&
    document.querySelector("#phone").value != "" &&
    document.querySelector("#subject").value != "" &&
    document.querySelector("#message").value != ""
  ) {
    let settings = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };
    let serviceId = "service_cty9s3g";
    let templateId = "template_87jm0bv";

    emailjs.send(serviceId, templateId, settings).then((res) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#phone").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#message").value = "";

      alert("Your message has been sent.");
    });
  } else {
    alert("Fill the whole form please.");
  }
}
