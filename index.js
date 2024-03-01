const currentYearElement = document.querySelector('.current-year')

const currentYear = new Date().getFullYear()

currentYearElement.textContent = currentYear
