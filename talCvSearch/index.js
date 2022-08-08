import {data} from './data.js'

 function getValueFromForm(){
        const promise = new Promise((resolve, reject) => {
            form.addEventListener('submit', function(e) {
                const input = document.querySelector('input')
                const value = input.value.toLocaleLowerCase()
                if (value) {
                    resolve(value)
                } else {
                    reject(value)
                }
                e.preventDefault()
        })

    })

    return promise
}

function getPerson(list, value){
    const result = list.find((person)=>{
        if (person.name === value) {
            return person
        }
    })
    if (result) {
        return result
    }
    else {
        throw new Error('person is not found')
    }
}


function createLi(person){
    const {name, src} = person
    const url = `https://htmlpreview.github.io/?https://github.com/d-stuff/netcraft-03-2022/blob/main/${src}`
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.innerText = `click here for ${name}'s cv`
    const form = document.querySelector('form')
    form.append(link)
}

getValueFromForm()
.then(result => getPerson(data, result))
.then(result => createLi(result))
.catch(result => console.log(result))


console.log(data)