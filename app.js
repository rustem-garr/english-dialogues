// ============ App State ============

const state = {
  currentPage: 'home',
  selectedCategory: null, // 'personal' or 'workplace'
  selectedTopicIndex: null,
  selectedExampleIndex: 0,
  searchQuery: ''
};

// ============ Data Loading ============

function getTopics(category) {
  if (category === 'personal') {
    return typeof personalTopics !== 'undefined' ? personalTopics : (window.personalTopics || []);
  } else if (category === 'workplace') {
    return typeof workplaceTopics !== 'undefined' ? workplaceTopics : (window.workplaceTopics || []);
  } else if (category === 'kids') {
    return typeof kidsTopics !== 'undefined' ? kidsTopics : (window.kidsTopics || []);
  }
  return [];
}

// ============ Page Rendering ============

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (state.currentPage === 'home') {
    renderHome(app);
  } else if (state.currentPage === 'category') {
    renderCategory(app);
  } else if (state.currentPage === 'topic-detail') {
    renderTopicDetail(app);
  }
}

function renderHome(container) {
  container.innerHTML = `
    <div class="home-page">
      <div class="home-header">
        <h1>English Learning Hub</h1>
        <p>Master English for everyday conversations and professional workplaces. Learn through realistic dialogues.</p>
      </div>
      
      <div class="home-buttons">
        <button class="category-btn personal-btn" onclick="goToCategory('personal')">
          Personal Life English
        </button>
        <button class="category-btn workplace-btn" onclick="goToCategory('workplace')">
          Workplace English
        </button>
        <button class="category-btn kids-btn" onclick="goToCategory('kids')">
          Flashcards for Davut
        </button>
      </div>
      
      <div class="footer-text">
        <p>💡 Click on highlighted words to see translations</p>
      </div>
    </div>
  `;
}

function renderCategory(container) {
  const topics = getTopics(state.selectedCategory);
  let categoryTitle = 'English Learning';
  
  if (state.selectedCategory === 'personal') {
    categoryTitle = 'Personal Life English';
  } else if (state.selectedCategory === 'workplace') {
    categoryTitle = 'Workplace English';
  } else if (state.selectedCategory === 'kids') {
    categoryTitle = 'English for Kids';
  }

  if (state.selectedCategory === 'kids') {
    renderKidsCategory(container, topics);
    return;
  }
  
  // Filter topics by search query
  let filteredTopics = topics;
  if (state.searchQuery.trim()) {
    const query = state.searchQuery.toLowerCase();
    filteredTopics = topics.filter(t => 
      t.title.toLowerCase().includes(query)
    );
  }

  container.innerHTML = `
    <div class="container">
      <div class="category-page">
        <button class="back-button" onclick="goHome()">← Back to Home</button>
        
        <div class="category-header">
          <h1>${categoryTitle}</h1>
          <div class="search-box">
            <input 
              type="text" 
              placeholder="Search topics..." 
              value="${state.searchQuery}"
              onkeyup="onSearchChange(this.value)"
            >
          </div>
        </div>

        ${filteredTopics.length === 0 ? `
          <div class="empty-state">
            <p>No topics found matching your search.</p>
          </div>
        ` : `
          <div class="topics-grid">
            ${filteredTopics.map((topic, idx) => `
              <div class="topic-card" onclick="selectTopic(${topics.indexOf(topic)})">
                <h3>${topic.title}</h3>
                <p>${topic.description}</p>
                <span class="example-count">${state.selectedCategory === 'kids' ? topic.flashcards.length + ' flashcards' : topic.examples.length + ' examples'}</span>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function renderKidsCategory(container, topics) {
  container.innerHTML = `
    <div class="container">
      <div class="category-page kids-category-page">
        <button class="back-button" onclick="goHome()">← Back to Home</button>

        <div class="category-header">
          <h1>Flashcards for Davut</h1>
        </div>

        ${topics.map(topic => `
          <div class="kids-topic-section">
            <h2 class="kids-topic-title">${topic.title}</h2>
            <div class="flashcards-grid">
              ${(topic.flashcards || []).map((flashcard, idx) => `
                <div class="flashcard-container" onclick="flipCard(this)">
                  <div class="flashcard">
                    <div class="flashcard-front">
                      <div class="flashcard-content">
                        <p class="flashcard-label">Question</p>
                        <p class="flashcard-text">${flashcard.question}</p>
                      </div>
                      <p class="flip-hint">Tap to reveal answer</p>
                    </div>
                    <div class="flashcard-back">
                      <div class="flashcard-content">
                        <p class="flashcard-label">Answer</p>
                        <p class="flashcard-text">${flashcard.answer}</p>
                      </div>
                      <p class="flip-hint">Tap to reveal question</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTopicDetail(container) {
  const topics = getTopics(state.selectedCategory);
  const topic = topics[state.selectedTopicIndex];
  
  // Check if this is a kids flashcard topic
  if (state.selectedCategory === 'kids' && topic.flashcards) {
    renderFlashcards(container, topic);
  } else {
    renderDialogueDetail(container, topic);
  }
}

function renderFlashcards(container, topic) {
  container.innerHTML = `
    <div class="container">
      <div class="flashcard-page">
        <button class="detail-back-button" onclick="goToCategory('${state.selectedCategory}')">← Back to Topics</button>
        <h1>${topic.title}</h1>
        
        <div class="flashcards-grid">
          ${topic.flashcards.map((flashcard, idx) => `
            <div class="flashcard-container" onclick="flipCard(this)">
              <div class="flashcard">
                <div class="flashcard-front">
                  <div class="flashcard-content">
                    <p class="flashcard-label">Question</p>
                    <p class="flashcard-text">${flashcard.question}</p>
                  </div>
                  <p class="flip-hint">Click to reveal answer</p>
                </div>
                <div class="flashcard-back">
                  <div class="flashcard-content">
                    <p class="flashcard-label">Answer</p>
                    <p class="flashcard-text">${flashcard.answer}</p>
                  </div>
                  <p class="flip-hint">Click to reveal question</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderDialogueDetail(container, topic) {
  const example = topic.examples[state.selectedExampleIndex];
  
  const exampleNumber = `${state.selectedTopicIndex + 1}.${state.selectedExampleIndex + 1}`;
  const exampleLabel = `Example ${state.selectedExampleIndex + 1} of ${topic.examples.length}`;

  container.innerHTML = `
    <div class="container">
      <div class="topic-detail-page">
        <div class="detail-header">
          <button class="detail-back-button" onclick="goToCategory('${state.selectedCategory}')">← Back to Topics</button>
          <h1>${topic.title}</h1>
          <div class="example-tracker">${exampleNumber} • ${exampleLabel}</div>
        </div>

        <div class="dialogue-container">
          ${example.dialogue.map(line => `
            <div class="dialogue-line">
              <div class="speaker ${line.speaker.toLowerCase()}">${line.speaker}</div>
              <div class="speech">${renderDialogueWithVocab(line.text, example.vocabulary)}</div>
            </div>
          `).join('')}
        </div>

        <div class="navigation-buttons">
          <button class="nav-btn" onclick="previousExample()" ${state.selectedExampleIndex === 0 ? 'disabled' : ''}>
            ← Previous
          </button>
          <div class="nav-counter">${exampleLabel}</div>
          <button class="nav-btn" onclick="nextExample()" ${state.selectedExampleIndex === topic.examples.length - 1 ? 'disabled' : ''}>
            Next →
          </button>
        </div>
      </div>
    </div>
  `;

  // Re-attach event listeners to vocabulary words
  attachVocabListeners(example.vocabulary);
}

// ============ Vocabulary Rendering ============

function renderDialogueWithVocab(text, vocabulary) {
  let html = escapeHtml(text);

  // Sort vocabulary by length (longest first) to avoid partial matches
  const sortedVocab = [...vocabulary].sort((a, b) => b.text.length - a.text.length);

  sortedVocab.forEach(vocab => {
    const regex = new RegExp(`\\b${escapeRegex(vocab.text)}\\b`, 'gi');
    html = html.replace(regex, `<span class="vocab-word" data-vocab-text="${escapeHtml(vocab.text)}" data-vocab-translation="${escapeHtml(vocab.translation)}" data-vocab-transcription="${escapeHtml(vocab.transcription)}">${vocab.text}</span>`);
  });

  return html;
}

function attachVocabListeners(vocabulary) {
  const vocabWords = document.querySelectorAll('.vocab-word');
  
  vocabWords.forEach(word => {
    word.addEventListener('click', (e) => {
      e.stopPropagation();
      showVocabPopup(word);
    });
  });
}

function showVocabPopup(element) {
  // Close any existing popup
  const existingPopup = document.querySelector('.vocab-popup');
  const existingBackdrop = document.querySelector('.vocab-popup-backdrop');
  if (existingPopup) existingPopup.remove();
  if (existingBackdrop) existingBackdrop.remove();

  const text = element.dataset.vocabText;
  const translation = element.dataset.vocabTranslation;
  const transcription = element.dataset.vocabTranscription;

  const popup = document.createElement('div');
  popup.className = 'vocab-popup';
  popup.innerHTML = `
    <button class="vocab-popup-close" onclick="closeVocabPopup()">×</button>
    <h4>${text}</h4>
    <div class="vocab-popup-item">
      <div class="vocab-label">Translation</div>
      <div class="vocab-value">${translation}</div>
    </div>
  `;

  const backdrop = document.createElement('div');
  backdrop.className = 'vocab-popup-backdrop';
  backdrop.onclick = closeVocabPopup;

  document.body.appendChild(backdrop);
  document.body.appendChild(popup);

  // Position popup near the clicked word
  const rect = element.getBoundingClientRect();
  let top = rect.bottom + 10;
  let left = rect.left - 30;

  // Adjust if popup goes off screen
  if (left + 280 > window.innerWidth) {
    left = window.innerWidth - 300;
  }
  if (left < 10) {
    left = 10;
  }
  if (top + 200 > window.innerHeight) {
    top = rect.top - 200;
  }

  popup.style.top = top + 'px';
  popup.style.left = left + 'px';
}

function closeVocabPopup() {
  const popup = document.querySelector('.vocab-popup');
  const backdrop = document.querySelector('.vocab-popup-backdrop');
  if (popup) popup.remove();
  if (backdrop) backdrop.remove();
}

// Close popup on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeVocabPopup();
  }
});

// ============ Navigation Functions ============

function goHome() {
  state.currentPage = 'home';
  state.selectedCategory = null;
  state.selectedTopicIndex = null;
  state.selectedExampleIndex = 0;
  state.searchQuery = '';
  render();
}

function goToCategory(category) {
  state.currentPage = 'category';
  state.selectedCategory = category;
  state.selectedTopicIndex = null;
  state.selectedExampleIndex = 0;
  state.searchQuery = '';
  render();
}

function onSearchChange(value) {
  state.searchQuery = value;
  render();
}

function selectTopic(topicIndex) {
  state.currentPage = 'topic-detail';
  state.selectedTopicIndex = topicIndex;
  state.selectedExampleIndex = 0;
  render();
}

function nextExample() {
  const topics = getTopics(state.selectedCategory);
  const topic = topics[state.selectedTopicIndex];
  if (state.selectedExampleIndex < topic.examples.length - 1) {
    state.selectedExampleIndex++;
    render();
    // Scroll to top
    document.querySelector('.topic-detail-page').scrollIntoView({ behavior: 'smooth' });
  }
}

function previousExample() {
  if (state.selectedExampleIndex > 0) {
    state.selectedExampleIndex--;
    render();
    // Scroll to top
    document.querySelector('.topic-detail-page').scrollIntoView({ behavior: 'smooth' });
  }
}

function flipCard(element) {
  element.classList.toggle('flipped');
}

// ============ Utility Functions ============

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============ Initialize App ============

document.addEventListener('DOMContentLoaded', () => {
  render();
});
