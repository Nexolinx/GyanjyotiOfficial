function toggleDropdown(sectionId) {
    const content = document.getElementById(sectionId);
    const icon = document.getElementById(`icon-${sectionId}`);


    content.classList.toggle('open');
    icon.classList.toggle('rotate');
}