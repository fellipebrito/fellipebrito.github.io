(function () {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const form = document.getElementById("form");
  const input = form.firstElementChild;
  const button = form.lastElementChild;

  form.onsubmit = (event) => {
    event.preventDefault();

    if (input.value == "") {
      alert("Please type your email");
      return false;
    }
    if (!validateEmail(input.value)) {
      alert("Email format invalid!");
      return false;
    }

    console.log(event);
    button.classList.add("loading");

    setTimeout(() => {
      button.classList.remove("loading");
    }, 1000);

    return false;
  };
})();
