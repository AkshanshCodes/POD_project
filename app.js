/**
 * TrustAI Assistant — Application Logic (v2 — ChatGPT-style UI)
 */

/* ── DOM ── */
const messagesArea  = document.getElementById('messages-area');
const chatInput     = document.getElementById('chat-input');
const sendBtn       = document.getElementById('send-btn');
const sidebarEl     = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const newChatBtn    = document.getElementById('new-chat-btn');
const verifyModal   = document.getElementById('verify-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBody     = document.getElementById('modal-body');
const modalTrustBar = document.getElementById('modal-trust-bar');
const modalTrustPct = document.getElementById('modal-trust-pct');
const appRoot       = document.querySelector('.app-root');
const mobileQuery   = window.matchMedia('(max-width: 768px)');

/* ── State ── */
let messageCount = 0;

/* ══════════════════════════════════════════
   UTILITIES
   ══════════════════════════════════════════ */
const getTrustClass = s => s >= 80 ? 'high' : s >= 50 ? 'medium' : 'low';
const getTrustIcon  = s => s >= 80 ? '✅'  : s >= 50 ? '⚠️'    : '❌';
const nowTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const escapeHTML = str =>
  str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const escapeAttr = str => String(str).replace(/"/g, '&quot;');

function getSourceTypeTag(type) {
  const map = {
    research: '<span class="source-type-tag tag-research">Research</span>',
    article:  '<span class="source-type-tag tag-article">Article</span>',
    blog:     '<span class="source-type-tag tag-blog">Blog</span>',
    wiki:     '<span class="source-type-tag tag-wiki">Wiki</span>',
    gov:      '<span class="source-type-tag tag-gov">Official</span>',
  };
  return map[type] || '<span class="source-type-tag tag-blog">Other</span>';
}

/** Bold **text** → <strong>text</strong>, render bullets as <li> */
function formatAnswer(text) {
  return text.split('\n').map(line => {
    line = line.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    if (line.startsWith('•')) return `<li>${line.slice(1).trim()}</li>`;
    if (!line) return '';
    return `<p>${line}</p>`;
  }).join('');
}

function scrollToBottom(smooth = true) {
  messagesArea.scrollTo({ top: messagesArea.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
}

const mobileSidebarBackdrop = document.createElement('div');
mobileSidebarBackdrop.className = 'mobile-sidebar-backdrop';
appRoot?.appendChild(mobileSidebarBackdrop);

function setSidebarBackdropVisible(visible) {
  mobileSidebarBackdrop.classList.toggle('visible', visible && mobileQuery.matches);
}

function closeSidebar() {
  sidebarEl.classList.add('collapsed');
  setSidebarBackdropVisible(false);
}

function openSidebar() {
  sidebarEl.classList.remove('collapsed');
  setSidebarBackdropVisible(true);
}

function syncSidebarForViewport() {
  if (mobileQuery.matches) {
    closeSidebar();
    return;
  }

  setSidebarBackdropVisible(false);
}

function closeSidebarOnMobile() {
  if (mobileQuery.matches) {
    closeSidebar();
  }
}

/* ══════════════════════════════════════════
   TEXTAREA AUTO-RESIZE + SEND ENABLE
   ══════════════════════════════════════════ */
function autoResize() {
  chatInput.style.height = 'auto';
  chatInput.style.height = Math.min(chatInput.scrollHeight, 180) + 'px';
}

function updateSendBtn() {
  sendBtn.disabled = !chatInput.value.trim();
}

chatInput.addEventListener('input', () => { autoResize(); updateSendBtn(); });

/* ══════════════════════════════════════════
   WELCOME SCREEN
   ══════════════════════════════════════════ */
let welcomeVisible = true;

function hideWelcome() {
  if (!welcomeVisible) return;
  const ws = document.getElementById('welcome-screen');
  if (!ws) return;
  welcomeVisible = false;
  ws.style.transition = 'opacity 0.25s, transform 0.25s';
  ws.style.opacity    = '0';
  ws.style.transform  = 'translateY(-8px)';
  setTimeout(() => ws.remove(), 260);
}

/* ══════════════════════════════════════════
   USER MESSAGE
   ══════════════════════════════════════════ */
function appendUserMessage(text) {
  const row = document.createElement('div');
  row.className = 'message-row user';
  row.innerHTML = `
    <div class="user-message-wrap">
      <div class="user-bubble">${escapeHTML(text)}</div>
    </div>
  `;
  messagesArea.appendChild(row);
  scrollToBottom();
}

/* ══════════════════════════════════════════
   TYPING INDICATOR
   ══════════════════════════════════════════ */
function showTyping() {
  const el = document.createElement('div');
  el.id = 'typing-row';
  el.className = 'typing-wrap';
  el.innerHTML = `
    <div class="ai-avatar"><span class="ai-avatar-letter">T</span></div>
    <div class="typing-card">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  messagesArea.appendChild(el);
  scrollToBottom();
}

function removeTyping() {
  document.getElementById('typing-row')?.remove();
}

/* ══════════════════════════════════════════
   AI CARD BUILDER
   ══════════════════════════════════════════ */
function buildAICard(data) {
  const { answer, trustScore, sources, verifyData, regenAnswer } = data;
  const tc   = getTrustClass(trustScore);
  const tIco = getTrustIcon(trustScore);
  const id   = `card-${++messageCount}`;

  const sourcesHTML = sources.map(s => {
    const sourceLabel = s.url
      ? `<a class="source-name source-link" href="${escapeAttr(s.url)}" target="_blank" rel="noopener noreferrer">📎 ${s.name}</a>`
      : `<span class="source-name">📎 ${s.name}</span>`;

    return `
    <div class="source-item">
      <span class="source-dot" style="background:${s.color}; box-shadow:0 0 5px ${s.color}88;"></span>
      ${sourceLabel}
      ${getSourceTypeTag(s.type)}
    </div>
  `;
  }).join('');

  /* Smart Labels */
  const confLabel  = tc === 'high' ? 'High' : tc === 'medium' ? 'Medium' : 'Low';
  const relLabel   = trustScore >= 85 ? 'High' : trustScore >= 60 ? 'Medium' : 'Low';
  const confClass  = `label-confidence-${tc}`;
  const smartLabelsHTML = `
    <div class="smart-labels">
      <span class="smart-label ${confClass}">📊 Confidence Level: ${confLabel}</span>
      <span class="smart-label label-reliability">📎 Source Reliability: ${relLabel}</span>
      <span class="smart-label label-verify">🔍 Verification Available</span>
    </div>
  `;

  const row = document.createElement('div');
  row.className = 'message-row ai-row';
  row.id = id;
  row.dataset.verifyData  = JSON.stringify(verifyData);
  row.dataset.regenAnswer = regenAnswer;
  row.dataset.trustScore  = trustScore;
  row.dataset.response    = JSON.stringify(data);

  row.innerHTML = `
    <div class="ai-message-wrap">
      <div class="ai-avatar"><span class="ai-avatar-letter">T</span></div>
      <div class="ai-content-wrap">
        <div class="ai-card">

          <!-- Header -->
          <div class="card-header">
            <div class="card-meta">
              <span class="card-label">📊 TrustAI Response</span>
              <span class="card-label-sep">·</span>
              <span class="card-time">${nowTime()}</span>
            </div>
            <div class="trust-badge ${tc}">
              <div class="trust-dot"></div>
              ${tIco} ${trustScore}% Trust
            </div>
          </div>

          <!-- Answer -->
          <div class="card-body">
            <div class="answer-text answer-content">${formatAnswer(answer)}</div>
          </div>

          <!-- Confidence bar -->
          <div class="trust-bar-section">
            <div class="trust-bar-label">
              <span>Confidence Level</span>
              <span class="bar-pct-label">${trustScore}%</span>
            </div>
            <div class="trust-bar-track">
              <div class="trust-bar-fill ${tc}" style="width:0%" data-target="${trustScore}"></div>
            </div>
          </div>

          <!-- Smart Labels -->
          ${smartLabelsHTML}

          <!-- Sources -->
          <div class="card-sources">
            <div class="sources-title">📎 Sources &amp; References</div>
            <div class="source-list">${sourcesHTML}</div>
          </div>

          <!-- Actions -->
          <div class="card-footer">
            <button class="btn-verify" data-card="${id}">🔍 Verify</button>
            <button class="btn-regenerate" data-card="${id}">
              <span class="regen-icon" style="display:inline-block;">🔁</span> Regenerate
            </button>
            <button class="btn-copy" data-card="${id}" title="Copy answer">📋 Copy</button>
          </div>

        </div>
      </div>
    </div>
  `;

  messagesArea.appendChild(row);

  /* Animate trust bar with stagger */
  requestAnimationFrame(() => {
    setTimeout(() => {
      const bar = row.querySelector('.trust-bar-fill');
      if (bar) bar.style.width = bar.dataset.target + '%';
    }, 120);
  });

  row.querySelector('.btn-verify').addEventListener('click', () => openVerifyModal(row));
  row.querySelector('.btn-regenerate').addEventListener('click', () => regenerate(row, data));
  row.querySelector('.btn-copy').addEventListener('click', () => copyAnswer(row));

  scrollToBottom();
}

/* ══════════════════════════════════════════
   VERIFY MODAL
   ══════════════════════════════════════════ */
function openVerifyModal(row) {
  const verifyData = JSON.parse(row.dataset.verifyData);
  const score      = parseInt(row.dataset.trustScore);

  /* Phase 1 — show processing spinner */
  modalBody.innerHTML = `
    <div class="modal-processing">
      <div class="modal-processing-ring"></div>
      <div class="modal-processing-text">
        Comparing multiple sources
        <span class="modal-proc-dot"></span>
        <span class="modal-proc-dot"></span>
        <span class="modal-proc-dot"></span>
      </div>
    </div>
  `;
  modalTrustBar.style.width = '0%';
  modalTrustPct.textContent  = score + '%';
  verifyModal.classList.add('open');
  document.body.style.overflow = 'hidden';

  /* Phase 2 — reveal cards after 1.3s */
  setTimeout(() => {
    modalBody.innerHTML = verifyData.map((v, i) => `
      <div class="verify-card" style="animation: fadeInUp 0.35s ${0.08 * i}s var(--ease) both; opacity:0;">
        <div class="verify-source-name">
          ${v.url
            ? `<a class="source-link" href="${escapeAttr(v.url)}" target="_blank" rel="noopener noreferrer">${v.source}</a>`
            : v.source}
        </div>
        <div class="verify-excerpt">&ldquo;${v.excerpt}&rdquo;</div>
        <div class="verify-match ${v.match}">
          ${v.match === 'match' ? '✅ Corroborated' : '⚠️ Partially corroborated'}
        </div>
      </div>
    `).join('');

    /* Trigger the staggered opacity animations */
    modalBody.querySelectorAll('.verify-card').forEach((c, i) => {
      setTimeout(() => { c.style.opacity = '1'; }, 80 * i);
    });

    setTimeout(() => { modalTrustBar.style.width = score + '%'; }, 200);
  }, 1300);
}

function closeVerifyModal() {
  verifyModal.classList.remove('open');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeVerifyModal);
verifyModal.addEventListener('click', e => { if (e.target === verifyModal) closeVerifyModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVerifyModal(); });

/* ══════════════════════════════════════════
   REGENERATE
   ══════════════════════════════════════════ */
function regenerate(row, data) {
  const btn     = row.querySelector('.btn-regenerate');
  const answerEl = row.querySelector('.answer-content');
  btn.disabled  = true;

  /* Step 1 — fade out current answer, show loading state */
  answerEl.style.transition = 'opacity 0.18s, transform 0.18s';
  answerEl.style.opacity    = '0';
  answerEl.style.transform  = 'translateY(6px)';

  setTimeout(() => {
    answerEl.innerHTML = `
      <div class="regen-loading">
        <div class="regen-spinner"></div>
        <span>Generating new response</span>
        <span class="regen-dots">
          <span></span><span></span><span></span>
        </span>
      </div>
    `;
    answerEl.style.opacity   = '1';
    answerEl.style.transform = 'translateY(0)';

    /* Step 2 — swap in regen answer after 1.1s */
    setTimeout(() => {
      answerEl.style.opacity   = '0';
      answerEl.style.transform = 'translateY(6px)';

      setTimeout(() => {
        answerEl.innerHTML   = formatAnswer(data.regenAnswer);
        answerEl.style.opacity   = '1';
        answerEl.style.transform = 'translateY(0)';

        /* Update trust score */
        const base     = parseInt(data.trustScore);
        const newScore = Math.min(100, Math.max(1, base + (Math.random() > 0.5 ? 4 : -3)));
        const tc       = getTrustClass(newScore);

        const badge = row.querySelector('.trust-badge');
        badge.className = `trust-badge ${tc}`;
        badge.innerHTML = `<div class="trust-dot"></div>${getTrustIcon(newScore)} ${newScore}% Trust`;

        const bar = row.querySelector('.trust-bar-fill');
        bar.className  = `trust-bar-fill ${tc}`;
        bar.style.width = newScore + '%';

        row.querySelector('.bar-pct-label').textContent = newScore + '%';
        row.dataset.trustScore = newScore;

        /* Update smart labels */
        const confLabel = tc === 'high' ? 'High' : tc === 'medium' ? 'Medium' : 'Low';
        const relLabel  = newScore >= 85 ? 'High' : newScore >= 60 ? 'Medium' : 'Low';
        const confEl    = row.querySelector('.label-confidence-high, .label-confidence-medium, .label-confidence-low');
        if (confEl) {
          confEl.className = `smart-label label-confidence-${tc}`;
          confEl.textContent = `📊 Confidence Level: ${confLabel}`;
        }
        const relEl = row.querySelector('.label-reliability');
        if (relEl) relEl.textContent = `📎 Source Reliability: ${relLabel}`;

        btn.disabled = false;
      }, 200);
    }, 1100);
  }, 200);
}

/* ══════════════════════════════════════════
   COPY
   ══════════════════════════════════════════ */
function copyAnswer(row) {
  const text = row.querySelector('.answer-content').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = row.querySelector('.btn-copy');
    const orig = btn.textContent;
    btn.textContent = '✅ Copied!';
    btn.style.color = 'var(--trust-high)';
    setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1800);
  });
}

/* ══════════════════════════════════════════
   SEND FLOW
   ══════════════════════════════════════════ */
function sendMessage(text) {
  text = text.trim();
  if (!text) return;

  closeSidebarOnMobile();
  hideWelcome();
  chatInput.value = '';
  autoResize();
  updateSendBtn();

  appendUserMessage(text);
  showTyping();

  const delay = 1100 + Math.random() * 900;

  setTimeout(() => {
    removeTyping();
    buildAICard(findResponse(text));
  }, delay);
}

/* ── Keyboard & button ── */
chatInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    if (!sendBtn.disabled) sendMessage(chatInput.value);
  }
});

sendBtn.addEventListener('click', () => {
  if (!sendBtn.disabled) sendMessage(chatInput.value);
});

/* ══════════════════════════════════════════
   STARTERS & TOPIC CHIPS
   ══════════════════════════════════════════ */
function wireStarters(root) {
  root.querySelectorAll('.starter-card, .topic-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      sendMessage(btn.dataset.query || btn.textContent.trim());
    });
  });
}
wireStarters(document);

/* ══════════════════════════════════════════
   SIDEBAR TOGGLE
   ══════════════════════════════════════════ */
sidebarToggle.addEventListener('click', () => {
  if (sidebarEl.classList.contains('collapsed')) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

mobileSidebarBackdrop.addEventListener('click', closeSidebar);
mobileQuery.addEventListener('change', syncSidebarForViewport);

/* ══════════════════════════════════════════
   NEW CHAT
   ══════════════════════════════════════════ */
function buildWelcomeHTML() {
  return `
    <div class="welcome-screen" id="welcome-screen">
      <div class="welcome-logo">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      </div>
      <h1 class="welcome-title">How can I help you?</h1>
      <p class="welcome-sub">Every answer includes a <strong>trust score</strong>, <strong>verified sources</strong>, and a <strong>fact-check</strong> button — so you always know what to believe.</p>
      <div class="starter-grid">
        <button class="starter-card" data-query="What is AI hallucination?"><span class="sc-icon">🤖</span><span class="sc-text">What is AI hallucination?</span></button>
        <button class="starter-card" data-query="Explain machine learning in simple terms"><span class="sc-icon">🧠</span><span class="sc-text">Explain machine learning simply</span></button>
        <button class="starter-card" data-query="How does blockchain work?"><span class="sc-icon">🔗</span><span class="sc-text">How does blockchain work?</span></button>
        <button class="starter-card" data-query="What are the effects of climate change?"><span class="sc-icon">🌍</span><span class="sc-text">Effects of climate change?</span></button>
      </div>
    </div>
  `;
}

newChatBtn.addEventListener('click', () => {
  messagesArea.innerHTML = buildWelcomeHTML();
  welcomeVisible = true;
  wireStarters(messagesArea);
  chatInput.value = '';
  autoResize();
  updateSendBtn();
  chatInput.focus();
  messageCount = 0;
});

/* ══════════════════════════════════════════
   ATTACH BUTTON (demo)
   ══════════════════════════════════════════ */
document.getElementById('attach-btn').addEventListener('click', () => {
  hideWelcome();
  const row = document.createElement('div');
  row.className = 'message-row user';
  row.innerHTML = `<div class="user-message-wrap"><div class="user-bubble" style="opacity:0.65;font-size:0.85rem;">📎 [File attachment — not processed in demo]</div></div>`;
  messagesArea.appendChild(row);
  scrollToBottom();
});

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
chatInput.focus();
syncSidebarForViewport();
