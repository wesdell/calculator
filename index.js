const d = document,
  $result = d.getElementById("result-op"),
  $numbers = d.querySelectorAll("input[data-math]"),
  $reset = d.querySelector("input[data-reset]"),
  $equal = d.querySelector("input[data-equal]");
let interval;
$result.textContent = "|";

$numbers.forEach((num) => {
  num.addEventListener("click", (ev) => {
    num.classList.add("btn-click");
    interval = setTimeout(() => {
      num.classList.remove("btn-click");
    }, 100);
    if (
      $result.textContent === "Invalid operation" ||
      $result.textContent === "|"
    ) {
      $result.textContent = num.value;
    } else {
      $result.textContent += num.value;
    }
  });
});

d.addEventListener("click", (e) => {
  if (e.target === $equal) {
    /^([0-9]+|-?[0-9]+)(\.?[0-9]*)[-+*/]?[0-9]+(\.?[0-9]*)$/.test(
      $result.textContent
    )
      ? ($result.textContent = `${eval($result.textContent)}`)
      : ($result.textContent = "Invalid operation");
    clearTimeout(interval);
  }
  if (e.target === $reset) {
    $result.textContent = "|";
    clearTimeout(interval);
  }
});
