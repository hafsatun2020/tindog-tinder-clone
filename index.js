// Remember to import the data and Dog class!
import {dogs} from './data.js'
import { Dog } from './Dog.js'


const post = document.querySelector('.container-inner')
const dogArray = ['rex', 'bella', 'teddy']

//returns the next dog in array after removing 
function getDogHeart(){
    if(dogArray.length > 0){
        const dog = dogs[dogArray.shift()]
        return dog ? new Dog(dog) : {}
    } else if(dogArray.length === 0){
        const dog = ''
    }
}


//remove the last dog and returns the next to last dog
function getDogX(){
    const dog = dogs[dogArray.pop()]
    return dog ? new Dog(dog) : ''
}


let currentDog = getDogHeart() 
//currentDog now equals an object
  
  
  
//display the dogs on the screen
function render(){
    if(currentDog){
     return post.innerHTML = currentDog.getDogHtml(dogs)
     //current dog is not changed or reassigned
    } else {
        return post.innerHTML = ` <h2> That's it for now!</h2>`
    }
}
render()

post.addEventListener('click', function(e){
        if(e.target.dataset.liked){  
           handleLike()         
        } else if (e.target.dataset.disliked){
            handleDislike()          
        } 
 
    setTimeout(() => { render() },2000)
    
})


function handleLike(){
    const likebadge= document.getElementById('liked')
    const dislikebadge = document.getElementById('not-liked')
    currentDog.hasBeenliked = true
    currentDog.hasBeenSwiped = true 
    if(currentDog.hasBeenliked){
        dislikebadge.classList.remove('show')
        likebadge.classList.toggle('show')
        currentDog.hasBeenSwiped ? currentDog = getDogHeart() : {}
    }
}

function handleDislike(){
    const likebadge= document.getElementById('liked')
    const dislikebadge = document.getElementById('not-liked')
    currentDog.hasBeenSwiped = true 
    if(!currentDog.hasBeenliked){
        likebadge.classList.remove('show')
        dislikebadge.classList.toggle('show')
        currentDog.hasBeenSwiped ? currentDog = getDogHeart() : {}
    }
}