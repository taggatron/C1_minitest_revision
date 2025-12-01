// Foundation-tier flashcards (taken from provided image)
const foundationFlashcards = [
    {
        id: 1,
        question: "What are the three sub-atomic particles found in atoms and their charges?",
        answer: "Protons have a charge of +1, neutrons have a charge of 0, and electrons have a charge of −1. The test table confirms the neutron charge is 0, not −1."
    },
    {
        id: 2,
        question: "Which scientist developed the atomic model with electrons in fixed energy levels?",
        answer: "Niels Bohr developed the atomic model with electrons in fixed energy levels (shells)."
    },
    {
        id: 3,
        question: "What is the approximate size of a single atom?",
        answer: "A single atom is about 1 × 10⁻¹⁰ m in size."
    },
    {
        id: 4,
        question: "Which part of the atom contains nearly all of its mass?",
        answer: "Nearly all of an atom’s mass is contained in its nucleus."
    },
    {
        id: 5,
        question: "What defines isotopes of an element?",
        answer: "Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons."
    },
    {
        id: 6,
        question: "What is the basis for ordering elements in the modern Periodic Table?",
        answer: "In the modern Periodic Table, elements are arranged in order of increasing atomic number."
    },
    {
        id: 7,
        question: "What does an element’s group number tell you about its atoms (Groups 1–7)?",
        answer: "For Groups 1–7, the group number tells you the number of electrons in the outer shell of the atom."
    },
    {
        id: 8,
        question: "How is a negative ion (anion) formed?",
        answer: "A negative ion (anion) is formed when an atom gains one or more electrons."
    },
    {
        id: 9,
        question: "What ion does rubidium (Group 1) form when it reacts?",
        answer: "Rubidium, a Group 1 metal, loses one electron to form an Rb⁺ ion."
    },
    {
        id: 10,
        question: "An atom forms X²⁻. Which group of the Periodic Table is it from?",
        answer: "An atom that forms an X²⁻ ion is from Group 6, because it gains two electrons."
    },
    {
        id: 11,
        question: "How is a covalent bond formed?",
        answer: "A covalent bond is formed by a shared pair of electrons between atoms."
    },
    {
        id: 12,
        question: "Why does diamond have a high melting point and chlorine a low melting point?",
        answer: "Diamond has strong covalent bonds in a giant lattice, so a lot of energy is needed to break them, giving it a high melting point. Chlorine exists as simple molecules with weak intermolecular forces, so less energy is needed and its melting point is low."
    },
    {
        id: 13,
        question: "Which property in a data table helps you identify a non-metal?",
        answer: "Low electrical conductivity (for example, a yellow solid with low electrical conductivity) helps identify a non-metal."
    },
    {
        id: 14,
        question: "Bromine is cooled from 65 °C to −5 °C. What change of state happens?",
        answer: "As bromine cools from gas to liquid, it condenses. This change is called condensation (gas → liquid)."
    },
    {
        id: 15,
        question: "Why can graphite make marks on paper?",
        answer: "Graphite has layers of carbon atoms that can slide over each other because the forces between the layers are weak, so layers rub off to make marks on paper."
    },
    {
        id: 16,
        question: "Which type of substance (giant covalent, ionic, metallic or polymer) has the weakest intermolecular forces?",
        answer: "Polymers have the weakest intermolecular forces compared with metals, ionic compounds and giant covalent structures."
    }
];

// Initialize the flashcard app (foundation-only)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');

    // Create flashcards from a given array
    function createFlashcards(cardsArray) {
        container.innerHTML = '';

        cardsArray.forEach(card => {
            const flashcardElement = document.createElement('div');
            flashcardElement.className = 'flashcard foundation';
            flashcardElement.setAttribute('data-id', card.id);

            flashcardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="question-number">Question ${card.id}</div>
                        ${card.id === 12 ? '' : ''}
                        <div class="question-text">${card.question}</div>
                        <div class="click-hint">Click to reveal answer</div>
                    </div>
                    <div class="card-back">
                        <div class="answer-label">Answer ${card.id}</div>
                        <div class="answer-text">${card.answer}</div>
                        <div class="click-hint">Click to show question</div>
                    </div>
                </div>
            `;

            // Add click handler
            flashcardElement.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });

            container.appendChild(flashcardElement);
        });
    }

    // Reset all cards
    function resetAllCards() {
        const allCards = document.querySelectorAll('.flashcard');
        allCards.forEach(card => {
            card.classList.remove('flipped');
        });
    }

    // Render foundation flashcards only
    createFlashcards(foundationFlashcards);

    // Reset button functionality
    resetButton.addEventListener('click', resetAllCards);
});