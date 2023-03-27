import { catsData } from "/data.js"

const catsArray = []
const emotionsArray = []
const emotionsRadios = document.getElementById('emotion-radios')

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


function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input type="radio" id="${emotion}" name="emotions" value="${emotion}" />
        </div>`
    }
    emotionsRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

