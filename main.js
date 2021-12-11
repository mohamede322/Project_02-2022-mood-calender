let btnS = document.querySelectorAll("button");
let spanS = document.querySelectorAll("span");


btnS.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnS.forEach((btn) => {
      btn.style.cssText = `background-color:transparent; color: ${btn.getAttribute(
        "data-color"
      )};`;
    });

    e.currentTarget.style.cssText = `background-color: ${btn.getAttribute(
      "data-color"
    )}; color:white;`;

    spanS.forEach((span) => {
      span.addEventListener("click", () => {
        span.style.backgroundColor = `${btn.style.backgroundColor}`;
      });
    });
  });
});
