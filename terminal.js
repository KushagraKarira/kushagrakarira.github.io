const input = document.querySelector('.input');
const container = document.querySelector('.container');

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = input.textContent.trim();
    input.textContent = '';

    const output = document.createElement('div');
    output.innerHTML = `<span class="prompt">[~/Projects/kushagrakarira.com]$</span>${command}`;
    container.appendChild(output);
  }
});

function handleCommand(command) {
  const outputElement = document.createElement("div");
  outputElement.innerHTML = `<span class="prompt">[~/Projects/kushagrakarira.com]$</span><span>${command}</span>`;
  containerElement.appendChild(outputElement);

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
      containerElement.appendChild(fileElement);
    });
  } else if (command === "pwd") {
    const pwdElement = document.createElement("div");
    pwdElement.textContent = "/home/user/Projects/kushagrakarira.com";
    containerElement.appendChild(pwdElement);
  } else if (command === "cd") {
    const errorElement = createErrorElement("cd: no such file or directory: ");
    containerElement.appendChild(errorElement);
  } else if (command === "mkdir") {
    const errorElement = createErrorElement("mkdir: missing operand");
    containerElement.appendChild(errorElement);
  } else if (command === "rm") {
    const errorElement = createErrorElement("rm: missing operand");
    containerElement.appendChild(errorElement);
  } else if (command === "clear") {
    document.querySelectorAll(".container > div:not(:first-child)").forEach((div) => {
      div.remove();
    });
  } else if (command === "time") {
    const timeElement = document.createElement("div");
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
    containerElement.appendChild(timeElement);
  } else {
    const errorElement = createErrorElement(`command not found: ${command}`);
    containerElement.appendChild(errorElement);
  }
}

function createErrorElement(text) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.textContent = text;
  return errorElement;
}

const input = document.querySelector('.input');

function moveCursorToEnd(el) {
  const range = document.createRange();
  const sel = window.getSelection();
  range.setStart(el.childNodes[0], el.textContent.length);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

// move cursor to end of text when input is focused
input.addEventListener('focus', (e) => {
  moveCursorToEnd(e.target);
});

// move cursor to end of text when a key is pressed
input.addEventListener('keydown', (e) => {
  moveCursorToEnd(e.target);
});

