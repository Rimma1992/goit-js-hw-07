function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    reference.controls.value = '';
  }