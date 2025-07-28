const cl = (input) => {
  console.log(input);
};

cl("hello world");

const dice_imgs = [
  "dice source/dice-six-faces-one.svg",
  "dice source/dice-six-faces-two.svg",
  "dice source/dice-six-faces-three.svg",
  "dice source/dice-six-faces-four.svg",
  "dice source/dice-six-faces-five.svg",
  "dice source/dice-six-faces-six.svg",
];

const roll_btn = document.getElementById("roll-btn");
const image_section = document.getElementById("image-section");
const user_input = document.getElementById("user-input");
const result = document.getElementById("result");

roll_btn.addEventListener("click", () => {
  image_section.innerHTML = null;
  let total = 0;

  for (let i = 0; i < user_input.value; i++) {
    let randomDice = Math.floor(Math.random() * 6);
    total += randomDice + 1;
    let dice = document.createElement("img");
    dice.setAttribute("id", "dice-img");
    dice.setAttribute("src", dice_imgs[randomDice]);
    image_section.appendChild(dice);
  }

  total === 0 || null
    ? (result.innerText = `the amount of dice hasn't been setted`)
    : (result.innerText = `result : ${total}`);
});
