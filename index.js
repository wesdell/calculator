const d = document,
  $result = d.getElementById("result-op"),
  $numbers = d.querySelectorAll("input[data-math]"),
  $reset = d.querySelector("input[data-reset]"),
  $equal = d.querySelector("input[data-equal]"),
  $remove = d.querySelector("input[data-remove]");
let interval;
$result.textContent = "|";

$numbers.forEach((num) => {
  num.addEventListener("click", (ev) => {
    num.classList.add("btn-click");
    interval = setTimeout(() => {
      num.classList.remove("btn-click");
    }, 100);

    $result.textContent === "Invalid operation" || $result.textContent === "|"
      ? ($result.textContent = num.value)
      : ($result.textContent += num.value);
  });
});

d.addEventListener("click", (e) => {
  if (e.target === $equal) {
    /^([0-9]+|-?[0-9]+)(\.?[0-9]*)([-+*/]?[0-9]+(\.?[0-9]*))+$/.test(
      $result.textContent
    )
      ? ($result.textContent = `${eval($result.textContent)}`)
      : ($result.textContent = "Invalid operation");

    if ($result.textContent === "Infinity" || $result.textContent === "NaN")
      $result.textContent = "Invalid operation";

    clearTimeout(interval);
  }
  if (e.target === $reset) {
    $result.textContent = "|";
    clearTimeout(interval);
  }

  if (e.target === $remove) removeText();
});

const removeText = () => {
  if ($result.textContent === "|" || $result.textContent === "")
    $result.textContent = "|";
  if ($result.textContent !== "|")
    $result.textContent = $result.textContent.substring(
      0,
      $result.textContent.length - 1
    );
};
