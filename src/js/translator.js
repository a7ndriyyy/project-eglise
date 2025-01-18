const translations = {
    en: {
      aboutUs: 'About Us',
      schedule: 'Schedule',
      contacts: 'Contacts',
      support: 'Support',
    },
    ua: {
      aboutUs: 'Про нас',
      schedule: 'Графік',
      contacts: 'Контакти',
      support: 'Підтримати',
    },
    fr: {
      aboutUs: 'À propos de nous',
      schedule: 'Horaires',
      contacts: 'Contacts',
      support: 'Soutenir',
    },
  };

  const titleElement = document.getElementById('navigation');
  const languageSelect = document.getElementById('language-select');
  const menuLinks = document.querySelectorAll('.nav-link');

  function updateText(language) {
    menuLinks.forEach(link => {
      const linkId = link.id; // Використовуємо id елементу, замість тексту
      if (translations[language][linkId]) {
        link.textContent = translations[language][linkId];
      }
    });
  }

  languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    updateText(selectedLanguage); // Оновлюємо текст на сторінці
  });

  // Встановлюємо мову за замовчуванням (наприклад, українську)
  updateText('ua');