const selectors = document.querySelectorAll(".controls input");

function handleChange() {
  const suffix = this.dataset.sizing || "";
  console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

selectors.forEach((input) => input.addEventListener("change", handleChange));
selectors.forEach((input) => input.addEventListener("mousemove", handleChange));
