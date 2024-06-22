const toggler = document.querySelector('.toggler')
const collapse = document.querySelector('#navbarCollapse')
const portfolioContainer = document.querySelector('.portfolio')
const skillListContainer = document.querySelector('.skill-list')
const currentYearElement = document.querySelector('.current-year')

const SKILLS_URL = './jsons/skills.json'
const PORTFOLIOS_URL = './jsons/portfolios.json'
const currentYear = new Date().getFullYear()
let isShow = false

toggler.addEventListener('click', function (e) {
	const btn = e.target.closest('.toggler-icon')
	if (!btn) return

	toggleNavigation(btn)
})

const toggleNavigation = function (btn) {
	if (isShow) {
		btn.classList.add('fa-bars')
		btn.classList.remove('fa-xmark')

		collapse.classList.add('push-out')
		collapse.classList.remove('push-in')
		collapse.style.height = '0'
	} else {
		btn.classList.remove('fa-bars')
		btn.classList.add('fa-xmark')

		collapse.classList.add('push-in')
		collapse.classList.remove('push-out')
		collapse.style.height = '100%'
	}
	isShow = !isShow
}

const renameKeys = function (obj) {
	const keyValues = Object.keys(obj).map((key) => {
		const index = key.indexOf('_')
		const newKey =
			index > 1
				? `${key.slice(0, index)}${key
						.slice(index + 1)[0]
						.toUpperCase()}${key.slice(index + 2)}`
				: key
		return { [newKey]: obj[key] }
	})
	return Object.assign({}, ...keyValues)
}

const programMarkup = function (list) {
	if (!Array.isArray(list)) return

	let html = ''
	list.forEach((item) => {
		html += `<p class="program-item">${item}</p>`
	})
	return html
}

const portfolioMarkup = function (data) {
	const { portfolios } = data
	portfolios.forEach(function (portfolio) {
		const port = renameKeys(portfolio)
		const list = programMarkup(port.skills)

		const html = `
			<div class="card">
        <div class="card-img">
          <img src="${port.imageUrl}" class="block" alt="${port.title}">
        </div>

        <div class="card-body">
          <p class="card-title subtitle-size">${port.title}</p>
          <div class="program-list">
						${list}
          </div>
          <p class="card-description content-size">${port.contentZh}</p>
          <p class="card-description content-size">${port.contentEn}</p>
        </div>

        <div class="card-footer">
          <div class="repo-link">
            <a href="${port.repoUrl}" aria-hidden="true" target="_blank">
              Link to repo
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <p class="card-copyright"><small>${port.copyright}</small>
          </p>
        </div>
      </div>
		`

		portfolioContainer?.insertAdjacentHTML('beforeend', html)
	})
}

const skillMarkup = function (data) {
	const { skills } = data
	skills.forEach(function (skill) {
		const html = `
		  <li class="skill-item">
        <span>${skill.skill}</span>
        <span class="level-percentage">
          <span class="percentage" style="width: ${skill.level};"></span>
        </span>
      </li>
		`
		skillListContainer?.insertAdjacentHTML('beforeend', html)
	})
}

displaySection = async function (url, callback) {
	try {
		const res = await fetch(url)
		if (!res.ok) throw new Error('Something went wrong!')

		const data = await res.json()
		if (!data) throw new Error('Data not found')

		callback(data)
	} catch (err) {
		console.error(err)
	}
}

displaySection(SKILLS_URL, skillMarkup)
displaySection(PORTFOLIOS_URL, portfolioMarkup)

currentYearElement.textContent = currentYear
