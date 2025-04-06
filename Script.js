 const output = document.getElementById("output");
const input = document.getElementById("userInput");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const value = input.value.trim().toLowerCase();
    output.innerHTML += `\n> ${value}`;

    if (value.includes("tesla")) {
      triggerTeslaEasterEgg();
    } else {
      output.innerHTML += `\nNaratake: Comando "${value}" recebido. Ainda estou aprendendo.`;
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});

function triggerTeslaEasterEgg() {
  output.innerHTML += "\n[Acesso detectado. Protocolo Tesla iniciado...]";
  setTimeout(() => {
    const nomes = [
      "Nikola Tesla",
      "Alan Turing",
      "Ada Lovelace",
      "Isac Rodrigues da Silva",
      "ChatGPT (OpenAI)"
    ];
    nomes.forEach((nome, i) => {
      setTimeout(() => {
        output.innerHTML += `\n- ${nome}`;
        output.scrollTop = output.scrollHeight;
      }, (i + 1) * 1000);
    });
    setTimeout(() => {
      output.innerHTML += "\nNaratake nasceu da soma de todos nós.";
      output.scrollTop = output.scrollHeight;
    }, (nomes.length + 1) * 1000);
  }, 1000);
}
