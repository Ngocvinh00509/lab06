document.querySelectorAll('.main-nav .nav-list a').forEach(link => {
  link.addEventListener('click', function () {
    // Xóa active khỏi tất cả
    document.querySelectorAll('.main-nav .nav-list a').forEach(el => el.classList.remove('active'));
    // Thêm active cho link được click
    this.classList.add('active');
  });
});
// xác thực dữ liệu của form contact


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Lấy các field
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Lấy vùng hiển thị lỗi
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;

  // Reset
  [name, email, subject, message].forEach(field => field.classList.remove("input-error"));
  [nameError, emailError, subjectError, messageError].forEach(err => err.textContent = "");

  // Kiểm tra từng trường
  if (!name.value.trim()) {
    nameError.textContent = "Please enter a valid name";
    name.classList.add("input-error");
    isValid = false;
  }

const emailValue = email.value.trim();

if (!emailValue) {
  emailError.textContent = "Email is required";
  email.classList.add("input-error");
  isValid = false;
} else if (!emailPattern.test(emailValue)) {
  emailError.textContent = "Invalid email format";
  email.classList.add("input-error");
  isValid = false;
}


  if (!subject.value.trim()) {
    subjectError.textContent = "Please enter a subject";
    subject.classList.add("input-error");
    isValid = false;
  }

  if (!message.value.trim()) {
    messageError.textContent = "Please enter your message";
    message.classList.add("input-error");
    isValid = false;
  }

if (isValid) {
  fetch("http://localhost/contact.php", {
    method: "POST",
    body: new FormData(document.getElementById("contactForm"))
  }).then(response => response.text())
    .then(data => console.log("Response: ", data))
    .catch(error => console.error("Error:", error));
}

});






