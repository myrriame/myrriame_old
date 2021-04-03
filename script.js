const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('mouseover', () => {
        changeClass()
        panel.classList.add('active');

    })

})

function changeClass() {
    panels.forEach(panel => {
        panel.classList.replace('active', 'changephoto')
    })
}