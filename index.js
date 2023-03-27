import { catsData } from "/data.js"

const catsArray = []
const emotionsArray = []
const emotionsRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats) {
    for (let cat of cats) {
        catsArray.push(cat)
        for (let emotion of cat.emotionTags) {
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let radioItems = ``
    for (let emotion of emotions) {
        radioItems += `<p>${emotion}</p>`
    }
    emotionsRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

