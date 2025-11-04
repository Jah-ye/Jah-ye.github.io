// Enkel, tilgjengelig accordion-funksjonalitet for OSI-seksjonen
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach((header) => {
        // Finn tilhørende innhold (neste element etter knappen)
        const content = header.nextElementSibling;
        if (!content) return;

        // Init: skjul innhold via CSS-klasse og sett aria
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('role', 'button');
        header.setAttribute('tabindex', '0');
        content.classList.remove('show');
        content.setAttribute('aria-hidden', 'true');

        function open() {
            header.setAttribute('aria-expanded', 'true');
            content.classList.add('show');
            content.setAttribute('aria-hidden', 'false');
        }

        function close() {
            header.setAttribute('aria-expanded', 'false');
            content.classList.remove('show');
            content.setAttribute('aria-hidden', 'true');
        }

        function toggle() {
            const expanded = header.getAttribute('aria-expanded') === 'true';
            if (expanded) close(); else open();
        }

        header.addEventListener('click', toggle);
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                toggle();
            }
        });
    });
});