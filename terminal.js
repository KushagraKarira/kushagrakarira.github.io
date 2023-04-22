const inputElement = document.querySelector(".input");
const containerElement = document.querySelector(".container");

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const command = inputElement.textContent.trim();
    inputElement.textContent = "";

    // Handle the command
    handleCommand(command);
  } else if (event.key === "Backspace") {
    inputElement.textContent = inputElement.textContent.slice(0, -1);
  } else if (event.key.length === 1) {
    // Only add printable characters to the input text
    inputElement.textContent += event.key;
  }
  // Prevent default behavior for arrow keys and delete key
  event.preventDefault();
});

function handleCommand(command) {
    const outputElement = document.createElement("div");
    outputElement.innerHTML = `<span class="prompt">[~/Projects/kushagrakarira.com]$</span><span>${command}</span>`;
    document.querySelector(".container").appendChild(outputElement);

    // Set ID of new prompt element
    const newPromptId = "prompt-" + Date.now();
    outputElement.setAttribute("id", newPromptId);

    // Move focus to new prompt element
    const newPromptElement = document.getElementById(newPromptId);
    newPromptElement.scrollIntoView();
    newPromptElement.querySelector(".input").focus();

    if (command === "ls") {
        const files = ["file1.txt", "file2.txt", "file3.txt"];
        files.forEach((file) => {
            const fileElement = document.createElement("div");
            fileElement.textContent = file;
            document.querySelector(".container").appendChild(fileElement);
        });
    } else if (command === "pwd") {
        const pwdElement = document.createElement("div");
        pwdElement.textContent = "/home/user/Projects/kushagrakarira.com";
        document.querySelector(".container").appendChild(pwdElement);
    } else if (command === "cd") {
        const errorElement = document.createElement("div");
        errorElement.textContent = `cd: no such file or directory: `;
        document.querySelector(".container").appendChild(errorElement);
    } else if (command === "mkdir") {
        const errorElement = document.createElement("div");
        errorElement.textContent = `mkdir: missing operand`;
        document.querySelector(".container").appendChild(errorElement);
    } else if (command === "rm") {
        const errorElement = document.createElement("div");
        errorElement.textContent = `rm: missing operand`;
        document.querySelector(".container").appendChild(errorElement);
    } else if (command === "clear") {
        document.querySelectorAll(".container > div:not(:first-child)").forEach((div) => {
            div.remove();
        });
    } else if (command === "time") {
        const timeElement = document.createElement("div");
        const now = new Date();
        timeElement.textContent = now.toLocaleString();
        document.querySelector(".container").appendChild(timeElement);
    } else {
        const errorElement = document.createElement("div");
        errorElement.textContent = `command not found: ${command}`;
        document.querySelector(".container").appendChild(errorElement);
    }
}
const input = document.querySelector('.input');

// move cursor to end of text when input is focused
input.addEventListener('focus', (e) => {
  const text = e.target.innerText;
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(e.target.childNodes[0], text.length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
});

// move cursor to end of text when a key is pressed
input.addEventListener('keydown', (e) => {
  const text = e.target.innerText;
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(e.target.childNodes[0], text.length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
});

