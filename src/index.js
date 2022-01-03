import { model } from './model'
import { templates } from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {

    const toHtml = templates[block.type]
    if (toHtml) {
        $site.insertAdjacentHTML('beforeend', toHtml(block))
    }
})

function title(block) {
    return `<div class="row">
				<div class="col-sm">
					<h1>${block.value}</h1>
				</div>
			</div>`
}

function text(block) {
    return `<div class="row">
				<div class="col-sm">
					<p>${block.value}</p>
				</div>
			</div>`
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
    return `<div class="row">${html.join('')}</div>`
}

function image(block) {
    return `<div class = "row">
        <img src = "${block.value}">
    </div>`
}