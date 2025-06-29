const defaultDoctors = [
  { name: 'Prof. dr sci. med. Bobi Nacho', page: 'bobi-nacho.html', image: 'bobi.png' },
  { name: 'Prof. dr sci. med. Nikola Miles', page: 'nikola-miles.html', image: 'bobi2.png' }
];

function getDoctors() {
  const saved = localStorage.getItem('doctors');
  if (!saved) {
    localStorage.setItem('doctors', JSON.stringify(defaultDoctors));
    return defaultDoctors;
  }
  try {
    return JSON.parse(saved);
  } catch {
    return defaultDoctors;
  }
}

function renderDoctors() {
  const container = document.getElementById('doctors-container');
  if (!container) return;
  container.innerHTML = '';
  const docs = getDoctors();
  docs.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'border rounded p-4 flex flex-col items-center text-center';
    card.innerHTML = `
      <img src="${doc.image}" alt="${doc.name}" class="w-40 h-40 object-cover rounded-full mb-4">
      <h3 class="font-semibold mb-2">${doc.name}</h3>
      <a href="${doc.page}" class="bg-blue-600 text-white px-4 py-2 rounded">Pogledaj profil</a>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderDoctors);
