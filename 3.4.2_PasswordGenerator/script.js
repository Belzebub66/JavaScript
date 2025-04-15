const slider = document.getElementById("slider");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const charLength = document.getElementById("valueTitle");

    slider.addEventListener("input", () => {
      charLength.textContent = `${slider.value}`;
    });

uppercase.addEventListener("change", () => {
  if (uppercase.checked) {
    console.log("uppercase checked");
  } else {
    console.log("uppercase unchecked");
  }
});

lowercase.addEventListener("change", () => {
  if (lowercase.checked) {
    console.log("lowercase checked");
  } else {
    console.log("lowercase unchecked");
  }
});

numbers.addEventListener("change", () => {
    if (numbers.checked) {
      console.log("numbers checked");
    } else {
      console.log("numbers unchecked");
    }
});

symbols.addEventListener("change", () => {
    if (symbols.checked) {
      console.log("symbols checked");
    } else {
      console.log("symbols unchecked");
    }
});


function generatePassword() {
  const length = slider.value;
  const includeUppercase = uppercase.checked;
  const includeLowercase = lowercase.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allChars = "";
  let password = "";

  if (includeUppercase) {
    allChars += uppercaseChars;
  }
  if (includeLowercase) {
    allChars += lowercaseChars;
  }
  if (includeNumbers) {
    allChars += numberChars;
  }
  if (includeSymbols) {
    allChars += symbolChars;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("generatedPassword").innerText = password;
  console.log(password);

  function determineStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
  
    return strength;
  }
  document.getElementById("strengthPassword").innerText = determineStrength(password);
  console.log(determineStrength(password));
}

document.getElementById("generatePassword").addEventListener("click", () => {
  generatePassword();
});




// Add event listener to the copy button
document.getElementById("copyPassword").addEventListener("click", () => {
  const password = document.getElementById("generatedPassword").innerText;
  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  });
});




