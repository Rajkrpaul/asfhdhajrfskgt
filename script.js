const subjectDropdown = document.getElementById('subject-dropdown');
const contentAreas = {
    byjus: document.querySelector('#byjus-content .material-list'),
    vedantu: document.querySelector('#vedantu-content .material-list'),
    toppr: document.querySelector('#toppr-content .material-list')
};

// Simulated data (in a real application, this would come from an API)
const studyMaterials = {
    math: {
        byjus: ['Algebra Basics', 'Geometry Fundamentals', 'Calculus Introduction'],
        vedantu: ['Trigonometry 101', 'Statistics and Probability', 'Number Theory'],
        toppr: ['Linear Equations', 'Quadratic Functions', 'Matrices and Determinants']
    },
    science: {
        byjus: ['Physics: Newton\'s Laws', 'Chemistry: Periodic Table', 'Biology: Cell Structure'],
        vedantu: ['Earth Science: Plate Tectonics', 'Chemistry: Chemical Bonding', 'Physics: Thermodynamics'],
        toppr: ['Biology: Genetics', 'Physics: Optics', 'Chemistry: Organic Compounds']
    },
    english: {
        byjus: ['Grammar Essentials', 'Literature Analysis', 'Essay Writing Tips'],
        vedantu: ['Vocabulary Building', 'Shakespearean Plays', 'Poetic Devices'],
        toppr: ['Reading Comprehension', 'Creative Writing', 'Public Speaking Skills']
    },
    history: {
        byjus: ['Ancient Civilizations', 'World War II', 'Industrial Revolution'],
        vedantu: ['French Revolution', 'American Civil War', 'Indian Independence Movement'],
        toppr: ['Renaissance Period', 'Cold War', 'Ancient Egyptian History']
    }
};

function updateContent(subject) {
    for (const [source, contentArea] of Object.entries(contentAreas)) {
        contentArea.innerHTML = '';
        if (studyMaterials[subject] && studyMaterials[subject][source]) {
            studyMaterials[subject][source].forEach(material => {
                const materialItem = document.createElement('div');
                materialItem.classList.add('material-item');
                materialItem.textContent = material;
                materialItem.addEventListener('click', () => alert(`Viewing ${material} from ${source}`));
                contentArea.appendChild(materialItem);
            });
        } else {
            contentArea.innerHTML = '<p>No materials available for this subject.</p>';
        }
    }
}

subjectDropdown.addEventListener('change', (e) => {
    const selectedSubject = e.target.value;
    if (selectedSubject) {
        updateContent(selectedSubject);
    } else {
        for (const contentArea of Object.values(contentAreas)) {
            contentArea.innerHTML = '<p>Please select a subject.</p>';
        }
    }
});

// Initialize with empty state
updateContent('');