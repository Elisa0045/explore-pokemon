const $root = document.getElementById("root");
const $form = document.createElement("form");
const $inputBox = document.createElement("input");
$inputBox.type = "number";
$inputBox.min = 1;
$inputBox.max = 151;
$inputBox.value = "1"
$inputBox.name = "userId"
const $inputButton = document.createElement("input");
$inputButton.type = "button";
$inputButton.id = "choose-pokemon-button";
$inputButton.value = "View pokemon";
$form.appendChild($inputBox);
$form.appendChild($inputButton);
$root.appendChild($form);
() => import('./app/pokemon.js');