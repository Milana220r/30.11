let div = document.querySelector(`div`);
let button = document.querySelector(`#button`);
button.addEventListener(`click`, function () {
  div.style.width = `130px`;
  div.style.height = `30px`;
  div.style.border = `1px solid black`;
});