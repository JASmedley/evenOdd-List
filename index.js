let usersWord = "";
let oddList = document.getElementById("odd");
let evenList = document.getElementById("even");

const updateWord = (element) => {
  usersWord = element.value;
  console.log(usersWord);
};

const handleSubmit = () => {
  let newListItem = document.createElement("li");
  newListItem.innerText = usersWord;
  if (usersWord.length === 0) {
    alert("Very funny, bitch. Try again dumb-dumb.");
    return;
  }
  if (usersWord.length % 2 === 0) {
    evenList.appendChild(newListItem);
  } else {
    oddList.appendChild(newListItem);
  }

  usersWord = "";
  document.getElementById("even-odd-form").reset();
};
