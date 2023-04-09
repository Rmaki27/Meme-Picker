import { catsData } from "/data.js"

const emotionRadios = document.getElementById('emotion-radios')
const radios = document.getElementsByClassName('radio')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyCheckbox = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalClose = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)
memeModalClose.addEventListener("click", closeModal)
getImageBtn.addEventListener("click", renderCat)

function highlightCheckedOption(e) {
    for (const radio of radios) {
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function closeModal() {
    memeModal.style.display = "none"
}

function renderCat() {
    // e.preventDefault()
    const catObject = getSingleCat()
    memeModalInner.innerHTML = `<img 
    class="cat-img"
    src="./images/${catObject.image}"
    alt="${catObject.alt}">`
    memeModal.style.display = 'block'
}

function getSingleCat() {
    const cats = getMatchingCats()
    if (cats.length === 1) {
        return cats[0]
    }
    else {
        const randomIndex = Math.floor(Math.random() * cats.length)
        return cats[randomIndex]
    }
}

function getMatchingCats() {
    const checkedElement = document.querySelector('input[type="radio"]:checked')
    if (checkedElement) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGifChecked = gifsOnlyCheckbox.checked

        const matchingCats = catsData.filter(function (cat) {
            if (isGifChecked) {
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }

            else {
                return cat.emotionTags.includes(selectedEmotion)
            }
        })
        return matchingCats
    }
}


function getEmotionsArray(cats) {
    const emotionsArray = []
    for (const cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input type="radio" id="${emotion}" name="emotions" value="${emotion}"> 
        </div> `
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionRadios(catsData)

