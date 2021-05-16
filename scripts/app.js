const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const fname = document.getElementsByName("fname")[0];
  const lname = document.getElementsByName("lname")[0];
  const email = document.getElementsByName("email")[0];
  const password = document.getElementsByName("password")[0];

  //First name check
  if (fname.value == "") {
    fname.classList.add("error");
    const childs = fname.parentElement.children;

    childs[1].classList.add("error-icon-show");
    childs[2].style.display = "block";
  } else {
    fname.classList.remove("error");
    const childs = fname.parentElement.children;

    childs[1].classList.remove("error-icon-show");
    childs[2].style.display = "none";
  }

  //Last name check
  if (lname.value == "") {
    lname.classList.add("error");
    const childs = lname.parentElement.children;

    childs[1].classList.add("error-icon-show");
    childs[2].style.display = "block";
  } else {
    lname.classList.remove("error");
    const childs = lname.parentElement.children;

    childs[1].classList.remove("error-icon-show");
    childs[2].style.display = "none";
  }

  //Email Check
  if (email.value == "") {
    email.classList.add("error");
    const childs = email.parentElement.children;

    childs[1].classList.add("error-icon-show");
    childs[2].style.display = "block";
  } else {
    email.classList.remove("error");
    const childs = email.parentElement.children;

    childs[1].classList.remove("error-icon-show");
    childs[2].style.display = "none";
  }

  //Password check
  if (password.value == "") {
    password.classList.add("error");
    const childs = password.parentElement.children;

    childs[1].classList.add("error-icon-show");
    childs[2].style.display = "block";
  } else {
    password.classList.remove("error");
    const childs = password.parentElement.children;

    childs[1].classList.remove("error-icon-show");
    childs[2].style.display = "none";
  }
});
