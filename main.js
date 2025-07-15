const form = document.getElementById("quizForm");
const resultSection = document.getElementById("result");
const summaryEl = document.getElementById("summary");
const restartBtn = document.getElementById("restart");

// Mapeia cada categoria para uma descrição resumida
const profiles = {
  social: {
    title: "Defensor(a) Social",
    text: "Você se destaca por seu compromisso com justiça social e inclusão. Procura sempre apoiar iniciativas que melhorem a vida das pessoas à sua volta."
  },
  cultural: {
    title: "Conector(a) Cultural",
    text: "Sua força está em valorizar a diversidade e difundir expressões artísticas. Pontes culturais são sua especialidade!"
  },
  ambiental: {
    title: "Guardião(ã) Ambiental",
    text: "A sustentabilidade é prioridade para você. Lidera ações que protegem ecossistemas e inspiram hábitos conscientes."
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Conta quantas respostas por categoria
  const counts = { social: 0, cultural: 0, ambiental: 0 };

  new FormData(form).forEach((value) => {
    counts[value]++;
  });

  // Determina a categoria com maior pontuação
  const topCategory = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  const { title, text } = profiles[topCategory];
  summaryEl.innerHTML = `<strong>${title}:</strong> ${text}`;

  form.classList.add("hidden");
  resultSection.classList.remove("hidden");
});

restartBtn.addEventListener("click", () => {
  form.reset();
  form.classList.remove("hidden");
  resultSection.classList.add("hidden");
});
