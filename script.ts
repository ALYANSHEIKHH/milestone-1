
// scripts.ts
// scripts.ts

document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId!);

            if (targetSection) {
                if (targetSection.style.display === 'none' || targetSection.style.display === '') {
                    targetSection.style.display = 'block';
                    button.textContent = `Hide ${capitalizeFirstLetter(targetId!)}`;
                } else {
                    targetSection.style.display = 'none';
                    button.textContent = `Show ${capitalizeFirstLetter(targetId!)}`;
                }
            }
        });
    });
});

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ');
}


