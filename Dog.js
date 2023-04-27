// Create the Dog class here
import { dogs } from "./data.js"



class Dog {
    constructor(data){
        Object.assign(this, data)
    } 
    getDogHtml(){
        const {avatar, name, bio, age } = this
               return ` 
               <div class="post">
                <img id="dog-img" src="${avatar}" alt="rex sitting on a sofa">
                    <img id='liked' class="isliked" src="./images/badge-like.png">
                    <img id='not-liked' class="nope" src="./images/badge-nope.png">
                    <div class="text">
                    <p class="name-age"> ${name}, ${age}</p>
                    <p class="bio">${bio}</p>
                    </div>
                    
                </div>
                
                <footer>
                    <div class="circle-icon-dislike" data-disliked="${name}"><img src="./images/icon-cross.png" class="icon-footer"  alt="lcone x"></div>

                    <div class="circle-icon-like" data-liked="${name}"><img src="./images/icon-heart.png" class="icon-footer"  alt="icon heart"></div>
                </footer>
               
           ` 
        
           //return this.doghtml
    }
}

export {Dog}
