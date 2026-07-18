const stages = [
  {
    title: "Build number sense",
    summary: "See numbers as friendly shapes, pairs, and parts instead of counting one by one.",
    concept: "This stage trains your brain to spot number bonds, doubles, near doubles, complements, and place value quickly. The goal is not guessing. The goal is seeing useful chunks so facts become automatic.",
    example: "100 - 63 = 37",
    explain: "Think: 63 needs 7 to reach 70, then 30 more to reach 100. So the missing part is 37.",
    skills: ["Number bonds to 10 and 20", "Doubles and near doubles", "Complements to 100", "Place value: hundreds, tens, ones"],
    videos: [
      ["Seeing numbers", "Numbers are easier when you spot groups instead of counting dots.", ["Look for pairs that make 10.", "Use doubles like 7 + 7.", "Ask: what is missing to reach the next friendly number?"]],
      ["Complements", "A complement is the missing piece that completes a target number.", ["63 plus 7 reaches 70.", "70 plus 30 reaches 100.", "7 plus 30 makes 37."]],
      ["Place value", "A number has rooms: hundreds, tens, and ones.", ["482 has 4 hundreds.", "It has 8 tens.", "It has 2 ones."]]
    ]
  },
  {
    title: "Speed addition",
    summary: "Make tens, twenties, fifties, and hundreds so addition feels lighter.",
    concept: "Fast addition is about choosing a smart path. Instead of marching left to right, move one number to a friendly landmark, then add what is left.",
    example: "28 + 37 = 65",
    explain: "Move 2 from 37 to 28. Now 28 becomes 30, and 35 is left. 30 + 35 = 65.",
    skills: ["Bridge to the next ten", "Add several numbers by grouping", "Make 20, 50, and 100", "Keep a running mental total"],
    videos: [
      ["Bridge to ten", "A tiny move can make a hard sum easy.", ["28 wants 2 to become 30.", "Take that 2 from 37.", "Now add 30 + 35."]],
      ["Group first", "In a list of numbers, find friendly pairs before adding.", ["6 + 4 makes 10.", "17 + 3 makes 20.", "Then add the leftovers."]],
      ["Running totals", "Hold one total in your head and keep it tidy.", ["Start with the biggest friendly chunk.", "Add the next chunk.", "Say the new total clearly."]]
    ]
  },
  {
    title: "Speed subtraction",
    summary: "Use complements and counting up instead of slow borrowing.",
    concept: "Subtraction can be seen as distance. From the smaller number, hop up to the bigger number using friendly stops.",
    example: "84 - 59 = 25",
    explain: "Hop from 59 to 60 by 1, then 60 to 84 by 24. The total hop is 25.",
    skills: ["Count up from the subtracted number", "Bridge through 10s", "Use complements", "Check by adding back"],
    videos: [
      ["Distance subtraction", "Subtraction asks: how far apart are the numbers?", ["Start at 59.", "Hop 1 to reach 60.", "Hop 24 to reach 84."]],
      ["Friendly stops", "Land on tens when the path looks messy.", ["76 to 80 is 4.", "80 to 113 is 33.", "4 + 33 = 37."]],
      ["Add-back check", "A quick addition can prove your answer.", ["84 - 59 gave 25.", "59 + 25 = 84.", "That means the answer fits."]]
    ]
  },
  {
    title: "Multiplication tables",
    summary: "Learn table facts by noticing relationships, not only by chanting.",
    concept: "Multiplication facts stick better when they connect. Times 5 is half of times 10, times 9 is times 10 minus one group, and times 11 has a pattern.",
    example: "8 x 9 = 72",
    explain: "Think 8 x 10 = 80, then subtract one 8. 80 - 8 = 72.",
    skills: ["x5 as half of x10", "x9 as x10 minus the number", "x11 patterns", "Instant recall through repetition"],
    videos: [
      ["Times 5", "Five facts are half of ten facts.", ["8 x 10 is 80.", "Half of 80 is 40.", "So 8 x 5 is 40."]],
      ["Times 9", "Nine is one less group than ten.", ["7 x 10 is 70.", "Take away one 7.", "7 x 9 is 63."]],
      ["Fact families", "Related facts help each other.", ["6 x 7 = 42.", "7 x 6 is also 42.", "42 divided by 7 is 6."]]
    ]
  },
  {
    title: "Special multiplication tricks",
    summary: "Use special patterns that feel like magic but still make number sense.",
    concept: "Some multiplications have shortcuts. The 11 trick is a favorite because the answer appears by adding the digits in the middle, then carrying when needed.",
    example: "43 x 11 = 473",
    explain: "Keep the 4 and 3 on the outside. Add 4 + 3 to make the middle digit 7.",
    skills: ["Two-digit numbers by 11", "Carry when the middle sum is bigger than 9", "Break tricks into steps", "Explain why the trick works"],
    videos: [
      ["The 11 trick", "The outside digits stay, and their sum goes in the middle.", ["For 43 x 11, write 4 and 3.", "4 + 3 = 7.", "The answer is 473."]],
      ["Carry the middle", "If the middle sum is 10 or more, carry carefully.", ["67 gives middle 13.", "Put 3 in the middle.", "Carry 1 to make 737."]],
      ["Why it works", "Multiplying by 11 means multiplying by 10 and adding one more copy.", ["43 x 10 = 430.", "Add 43.", "430 + 43 = 473."]]
    ]
  },
  {
    title: "Close to 10, 100, or 1000",
    summary: "Turn nearby numbers into tiny differences from a base.",
    concept: "When numbers sit near 10, 100, or 1000, use the base as your anchor. Combine one cross-subtraction with one small multiplication.",
    example: "97 x 96 = 9312",
    explain: "Both are near 100: 97 is 3 below and 96 is 4 below. 97 - 4 = 93, and 3 x 4 = 12.",
    skills: ["Choose the nearest base", "Track below-base differences", "Cross-subtract for the first part", "Multiply differences for the last part"],
    videos: [
      ["Pick a base", "A base is a nearby friendly number like 10, 100, or 1000.", ["97 and 96 are close to 100.", "Their gaps are 3 and 4.", "Small gaps are easier than big products."]],
      ["Cross-subtract", "Subtract either gap from the other number.", ["97 - 4 = 93.", "96 - 3 = 93 too.", "That is the first part."]],
      ["Last digits", "The small gaps make the ending.", ["3 x 4 = 12.", "The base is 100, so use two ending digits.", "93 and 12 make 9312."]]
    ]
  },
  {
    title: "Squaring numbers",
    summary: "Square special numbers with patterns you can hold in your head.",
    concept: "Numbers ending in 5 have a famous square pattern. Multiply the tens digit by the next number, then attach 25.",
    example: "65 squared = 4225",
    explain: "The tens digit is 6. Multiply 6 by the next number, 7, to get 42. Add 25 to the end.",
    skills: ["Squares ending in 5", "Nearby-square thinking", "Use symmetrical distance", "Check the last two digits"],
    videos: [
      ["Ending in 5", "Every square ending in 5 ends with 25.", ["35 squared starts with 3 x 4.", "That gives 12.", "Attach 25 to get 1225."]],
      ["Next number", "Use the tens digit and the next counting number.", ["For 65, use 6.", "The next number is 7.", "6 x 7 = 42."]],
      ["Nearby squares", "Move equally away from a friendly number.", ["49 x 51 sits around 50.", "Think 50 squared minus 1.", "2500 - 1 = 2499."]]
    ]
  },
  {
    title: "Patterns",
    summary: "Spot repeating rules so you do less raw calculation.",
    concept: "Patterns are math clues. Divisibility tests, digital roots, estimation, symmetry, and pattern completion help you choose the shortest route.",
    example: "Is 372 divisible by 3?",
    explain: "Add its digits: 3 + 7 + 2 = 12. Since 12 is divisible by 3, 372 is divisible by 3.",
    skills: ["Divisibility tests", "Digital roots", "Estimation", "Symmetry and pattern completion"],
    videos: [
      ["Divisibility", "Some numbers give clues in their digits.", ["Add digits for the 3 test.", "Check the last digit for 2, 5, or 10.", "Use clues before dividing."]],
      ["Digital roots", "Keep adding digits until one digit remains.", ["987 becomes 9 + 8 + 7.", "That is 24.", "2 + 4 = 6."]],
      ["Estimate first", "A close answer helps you catch silly mistakes.", ["Round 48 x 6 to 50 x 6.", "That is about 300.", "So 288 makes sense."]]
    ]
  },
  {
    title: "Mental visualization",
    summary: "Keep steps in working memory and combine them without writing.",
    concept: "Strong mental math students picture partial answers. They split a problem, hold the pieces, then combine them clearly.",
    example: "47 x 8 = 376",
    explain: "See 47 as 40 and 7. 40 x 8 = 320, 7 x 8 = 56, and 320 + 56 = 376.",
    skills: ["Split into friendly parts", "Hold partial products", "Combine without paper", "Speak steps clearly"],
    videos: [
      ["Picture the split", "Break a number into parts you can see.", ["47 becomes 40 and 7.", "Multiply each part by 8.", "Keep the two answers ready."]],
      ["Working memory", "Your brain can hold a few useful pieces at once.", ["Hold 320.", "Hold 56.", "Now combine them."]],
      ["Say the steps", "Quietly naming steps keeps them from floating away.", ["Forty times eight is 320.", "Seven times eight is 56.", "Together they make 376."]]
    ]
  }
];

const state = {
  stage: 0,
  drill: "addition",
  current: null,
  score: 0,
  time: 60,
  running: false,
  timerId: null,
  video: null,
  slide: 0,
  autoplayId: null
};

const el = {
  stageList: document.querySelector("#stageList"),
  stageSelect: document.querySelector("#stageSelect"),
  menuToggle: document.querySelector("#menuToggle"),
  eyebrow: document.querySelector("#stageEyebrow"),
  title: document.querySelector("#stageTitle"),
  summary: document.querySelector("#stageSummary"),
  concept: document.querySelector("#conceptText"),
  example: document.querySelector("#stageExample"),
  explain: document.querySelector("#exampleExplain"),
  skills: document.querySelector("#skillList"),
  videos: document.querySelector("#videoGrid"),
  tabs: document.querySelectorAll(".drill-tabs button"),
  timer: document.querySelector("#timer"),
  score: document.querySelector("#score"),
  goal: document.querySelector("#goal"),
  drillLabel: document.querySelector("#drillLabel"),
  problemText: document.querySelector("#problemText"),
  drillHint: document.querySelector("#drillHint"),
  answerForm: document.querySelector("#answerForm"),
  answerInput: document.querySelector("#answerInput"),
  startBtn: document.querySelector("#startBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  feedback: document.querySelector("#feedback"),
  videoModal: document.querySelector("#videoModal"),
  closeVideo: document.querySelector("#closeVideo"),
  videoVisual: document.querySelector("#videoVisual"),
  videoStep: document.querySelector("#videoStep"),
  videoTitle: document.querySelector("#videoTitle"),
  videoNarration: document.querySelector("#videoNarration"),
  prevSlide: document.querySelector("#prevSlide"),
  playSlide: document.querySelector("#playSlide"),
  nextSlide: document.querySelector("#nextSlide")
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(items) {
  return items[randomInt(0, items.length - 1)];
}

function stageLevel() {
  return state.stage + 1;
}

function makeAdditionProblem() {
  const level = stageLevel();
  if (level === 1) {
    const a = randomInt(1, 19);
    const target = choice([10, 20, 100]);
    const answer = target - a;
    return { text: `${a} + ? = ${target}`, answer, hint: "Find the missing part that completes the friendly number." };
  }
  if (level === 2) {
    const a = randomInt(18, 89);
    const bridge = 10 - (a % 10);
    const b = bridge + randomInt(12, 58);
    return { text: `${a} + ${b}`, answer: a + b, hint: `Make ${a + bridge} first, then add what is left.` };
  }
  const a = randomInt(20, 99);
  const b = randomInt(20, 99);
  const c = randomInt(5, 50);
  return { text: `${a} + ${b} + ${c}`, answer: a + b + c, hint: "Look for a pair that makes a ten, twenty, fifty, or hundred." };
}

function makeSubtractionProblem() {
  const level = stageLevel();
  const a = randomInt(level < 6 ? 42 : 120, level < 6 ? 99 : 999);
  const b = randomInt(18, a - 7);
  return { text: `${a} - ${b}`, answer: a - b, hint: `Count up from ${b} to ${a} using friendly stops.` };
}

function makeMultiplicationProblem() {
  const level = stageLevel();
  if (level === 5) {
    const n = randomInt(12, 89);
    return { text: `${n} x 11`, answer: n * 11, hint: "Use the 11 pattern, then carry if the middle is too big." };
  }
  if (level === 6) {
    const a = randomInt(91, 99);
    const b = randomInt(91, 99);
    return { text: `${a} x ${b}`, answer: a * b, hint: "Both numbers are close to 100. Use their gaps." };
  }
  if (level === 7) {
    const n = choice([15, 25, 35, 45, 55, 65, 75, 85, 95]);
    return { text: `${n} squared`, answer: n * n, hint: "Multiply the tens digit by the next number, then attach 25." };
  }
  const a = randomInt(2, 12);
  const b = randomInt(2, 12);
  return { text: `${a} x ${b}`, answer: a * b, hint: "Use a relationship: x5, x9, x10, or a fact family." };
}

function makePatternProblem() {
  const n = randomInt(111, 999);
  const digitSum = String(n).split("").reduce((sum, digit) => sum + Number(digit), 0);
  return { text: `Digit sum of ${n}`, answer: digitSum, hint: "Add each digit. This helps with divisibility and digital roots." };
}

function makeOralProblem() {
  const makers = [makeAdditionProblem, makeSubtractionProblem, makeMultiplicationProblem, makePatternProblem];
  const problem = choice(makers)();
  return { ...problem, hint: "Say the steps out loud, then enter the final answer." };
}

function nextProblem() {
  const makers = {
    addition: makeAdditionProblem,
    multiplication: makeMultiplicationProblem,
    flash: () => choice([makeAdditionProblem, makeSubtractionProblem, makeMultiplicationProblem])(),
    oral: makeOralProblem
  };
  state.current = makers[state.drill]();
  el.problemText.textContent = state.current.text;
  el.drillHint.textContent = state.current.hint;
  el.answerInput.value = "";
  el.answerInput.focus();
}

function renderStage() {
  const stage = stages[state.stage];
  el.eyebrow.textContent = `Stage ${state.stage + 1}`;
  el.title.textContent = stage.title;
  el.summary.textContent = stage.summary;
  el.concept.textContent = stage.concept;
  el.example.textContent = stage.example;
  el.explain.textContent = stage.explain;
  el.stageSelect.value = String(state.stage);

  document.querySelectorAll(".stage-button").forEach((button, index) => {
    button.classList.toggle("active", index === state.stage);
  });

  el.skills.innerHTML = stage.skills
    .map((skill) => `<div class="skill-item"><span class="skill-dot"></span><span>${skill}</span></div>`)
    .join("");

  el.videos.innerHTML = stage.videos
    .map((video, index) => `
      <button class="video-card" type="button" data-video="${index}">
        <span class="play-tile">Play</span>
        <span>
          <h4>${video[0]}</h4>
          <p>${video[1]}</p>
        </span>
      </button>
    `)
    .join("");

  document.querySelectorAll(".video-card").forEach((button) => {
    button.addEventListener("click", () => openVideo(Number(button.dataset.video)));
  });

  resetDrill();
}

function renderStageMenu() {
  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.className = "stage-button";
    button.type = "button";
    button.innerHTML = `<strong>Stage ${index + 1}</strong><span>${stage.title}</span>`;
    button.addEventListener("click", () => {
      state.stage = index;
      renderStage();
      el.stageList.classList.remove("open");
    });
    el.stageList.appendChild(button);

    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Stage ${index + 1} - ${stage.title}`;
    el.stageSelect.appendChild(option);
  });
}

function setDrill(drill) {
  state.drill = drill;
  el.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.drill === drill));
  const labels = {
    addition: ["Addition Sprint", "50"],
    multiplication: ["Multiplication Race", "30"],
    flash: ["Flash Cards", "25"],
    oral: ["Oral Challenge", "20"]
  };
  el.drillLabel.textContent = labels[drill][0];
  el.goal.textContent = labels[drill][1];
  resetDrill();
}

function startDrill() {
  if (state.running) return;
  state.running = true;
  state.time = 60;
  state.score = 0;
  el.timer.textContent = state.time;
  el.score.textContent = state.score;
  el.feedback.textContent = "Go. Fast and accurate beats fast and messy.";
  nextProblem();
  state.timerId = setInterval(() => {
    state.time -= 1;
    el.timer.textContent = state.time;
    if (state.time <= 0) finishDrill();
  }, 1000);
}

function finishDrill() {
  clearInterval(state.timerId);
  state.running = false;
  const goal = Number(el.goal.textContent);
  const result = state.score >= goal ? "Goal met" : "Keep building";
  el.feedback.textContent = `${result}: ${state.score} correct in one minute. Repeat the drill to make facts automatic.`;
  el.problemText.textContent = "Time";
  el.answerInput.blur();
}

function resetDrill() {
  clearInterval(state.timerId);
  state.running = false;
  state.score = 0;
  state.time = 60;
  state.current = null;
  el.timer.textContent = "60";
  el.score.textContent = "0";
  el.problemText.textContent = "Press Start";
  el.drillHint.textContent = "Build automaticity through quick, repeated answers.";
  el.feedback.textContent = "Choose a drill and warm up those number muscles.";
  el.answerInput.value = "";
}

function checkAnswer(event) {
  event.preventDefault();
  if (!state.running || !state.current) {
    startDrill();
    return;
  }
  const answer = Number(el.answerInput.value);
  if (Number.isNaN(answer)) return;
  if (answer === state.current.answer) {
    state.score += 1;
    el.score.textContent = state.score;
    el.feedback.textContent = "Correct. Again, quickly.";
    nextProblem();
  } else {
    el.feedback.textContent = `Almost. The answer is ${state.current.answer}. Try the next one.`;
    nextProblem();
  }
}

function makeVisualNumbers(slideText) {
  const digits = slideText.match(/\d+/g) || ["10", "20", "50", "100"];
  const chips = digits.slice(0, 12);
  while (chips.length < 8) chips.push(String(randomInt(1, 12)));
  el.videoVisual.innerHTML = chips
    .map((digit, index) => `<span class="visual-chip" style="animation-delay:${index * 40}ms">${digit}</span>`)
    .join("");
}

function renderVideoSlide() {
  const stage = stages[state.stage];
  const video = stage.videos[state.video];
  const slides = video[2];
  const text = slides[state.slide];
  el.videoStep.textContent = `${state.slide + 1} / ${slides.length}`;
  el.videoTitle.textContent = video[0];
  el.videoNarration.textContent = text;
  makeVisualNumbers(text);
}

function openVideo(index) {
  state.video = index;
  state.slide = 0;
  el.videoModal.classList.add("open");
  el.videoModal.setAttribute("aria-hidden", "false");
  renderVideoSlide();
}

function closeVideo() {
  clearInterval(state.autoplayId);
  state.autoplayId = null;
  el.playSlide.textContent = "Play";
  el.videoModal.classList.remove("open");
  el.videoModal.setAttribute("aria-hidden", "true");
}

function changeSlide(delta) {
  const slides = stages[state.stage].videos[state.video][2];
  state.slide = (state.slide + delta + slides.length) % slides.length;
  renderVideoSlide();
}

function toggleAutoplay() {
  if (state.autoplayId) {
    clearInterval(state.autoplayId);
    state.autoplayId = null;
    el.playSlide.textContent = "Play";
    return;
  }
  el.playSlide.textContent = "Pause";
  state.autoplayId = setInterval(() => changeSlide(1), 2500);
}

renderStageMenu();
renderStage();

el.menuToggle.addEventListener("click", () => el.stageList.classList.toggle("open"));
el.stageSelect.addEventListener("change", () => {
  state.stage = Number(el.stageSelect.value);
  renderStage();
});
el.tabs.forEach((tab) => tab.addEventListener("click", () => setDrill(tab.dataset.drill)));
el.startBtn.addEventListener("click", startDrill);
el.nextBtn.addEventListener("click", nextProblem);
el.resetBtn.addEventListener("click", resetDrill);
el.answerForm.addEventListener("submit", checkAnswer);
el.closeVideo.addEventListener("click", closeVideo);
el.prevSlide.addEventListener("click", () => changeSlide(-1));
el.nextSlide.addEventListener("click", () => changeSlide(1));
el.playSlide.addEventListener("click", toggleAutoplay);
el.videoModal.addEventListener("click", (event) => {
  if (event.target === el.videoModal) closeVideo();
});
