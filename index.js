import { catsData } from "/data.js"

const catsArray = []
const emotionsArray = []
const emotionRadios = document.getElementById('emotion-radios')
const radios = document.getElementsByClassName('radio')

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e) {
    for (let radio of radios) {
        radio.classList.remove('highlight')
        document.getElementById(e.target.id).parentElement.classList.add('highlight')
    }
}
function getEmotionsArray(cats) {
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input type="radio" id="${emotion}" name="emotions" value="${emotion}" />
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionRadios(catsData)

