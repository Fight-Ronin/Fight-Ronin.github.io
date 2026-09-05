(() => {
  const slogan = document.querySelector('[data-typewriter]');
  const source = slogan?.querySelector('.typewriter-source');
  const terminalCursor = slogan?.querySelector('.cli-cursor');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!source || motionPreference.matches) return;

  // Keep one complete accessible sentence. The visual copy reserves its final
  // wrapping from the beginning, so typing cannot move the content below it.
  const visual = document.createElement('span');
  visual.className = 'typewriter-visual';
  visual.setAttribute('aria-hidden', 'true');
  const letters = [];
  for (const token of source.textContent.match(/\S+|\s+/g) || []) {
    if (/^\s+$/.test(token)) {
      visual.append(document.createTextNode(token));
      continue;
    }
    const word = document.createElement('span');
    word.className = 'typewriter-word';
    for (const character of token) {
      const letter = document.createElement('span');
      letter.className = 'typewriter-letter';
      letter.textContent = character;
      word.append(letter);
      letters.push(letter);
    }
    visual.append(word);
  }
  if (!letters.length) return;
  if (terminalCursor) slogan.insertBefore(visual, terminalCursor);
  else slogan.append(visual);
  source.classList.add('is-enhanced');

  let frame;
  let revealed = 0;
  const interval = Math.max(14, Math.min(32, 3800 / letters.length));
  const start = performance.now() + 180;
  const finish = () => {
    cancelAnimationFrame(frame);
    letters.forEach(letter => {
      letter.classList.add('is-revealed');
      letter.classList.remove('is-cursor');
    });
    slogan.dataset.typing = 'complete';
    motionPreference.removeEventListener('change', finish);
  };
  const type = now => {
    const count = Math.min(letters.length, Math.max(0, Math.floor((now - start) / interval)));
    if (count > revealed) {
      letters[revealed - 1]?.classList.remove('is-cursor');
      while (revealed < count) letters[revealed++].classList.add('is-revealed');
      letters[revealed - 1].classList.add('is-cursor');
    }
    if (revealed === letters.length) finish();
    else frame = requestAnimationFrame(type);
  };
  slogan.dataset.typing = 'active';
  motionPreference.addEventListener('change', finish);
  frame = requestAnimationFrame(type);
})();
