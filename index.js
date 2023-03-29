import { catsData } from "/data.js"

const catsArray = []
const emotionsArray = []
const emotionRadios = document.getElementById('emotion-radios')
const radios = document.getElementsByClassName('radio')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyCheckbox = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)
getImageBtn.addEventListener("click", renderCat)

function getMatchingCatsArray() {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked')
    const isGifChecked = gifsOnlyCheckbox.checked
    const matchingCatsArray = catsData.filter(function (cat) {
        if (isGifChecked) {
            return cat.emotionTags.includes(selectedEmotion.value) && cat.isGif
        }
        else {
            return cat.emotionTags.includes(selectedEmotion.value)
        }
    })
    return matchingCatsArray
}

function getSingleCatObject() {
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1) {
        console.log(catsArray[0])
    }
}

function renderCat() {
    getSingleCatObject()
}


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

