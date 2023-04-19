'use strict'

class SlotMachine{

    constructor(slots, scores, button, payBalance , srcImg){
       this.slots = document.querySelector(slots);
       this.scores = document.querySelector(scores);
       this.button = document.querySelector(button);
       this.payBalance = document.querySelector(payBalance);
       this.slot1 = 0;
       this.slot2 = 0;
       this.slot3 = 0;
       this.slot4 = 0;
       this.srcImg = srcImg

    }
generateImageForSlot1(){
      if(this.slot1 == 1){
          this.slots.children[0].children[0].src = this.srcImg[0]
      }
      if(this.slot1 == 2){
        this.slots.children[0].children[0].src = this.srcImg[1]
    } 
    if(this.slot1 == 3){
        this.slots.children[0].children[0].src = this.srcImg[2]
    }
    if(this.slot1 == 4){
        this.slots.children[0].children[0].src = this.srcImg[3]
    }
}  
generateImageForSlot2(){
    if(this.slot2 == 1){
        this.slots.children[1].children[0].src = this.srcImg[0]
    }
    if(this.slot2 == 2){
      this.slots.children[1].children[0].src = this.srcImg[1]
  } 
  if(this.slot2 == 3){
      this.slots.children[1].children[0].src = this.srcImg[2]
  }
  if(this.slot2 == 4){
      this.slots.children[1].children[0].src = this.srcImg[3]
  }
}
 
generateImageForSlot3(){
    if(this.slot3 == 1){
        this.slots.children[2].children[0].src = this.srcImg[0]
    }
    if(this.slot3 == 2){
      this.slots.children[2].children[0].src = this.srcImg[1]
  } 
  if(this.slot3 == 3){
      this.slots.children[2].children[0].src = this.srcImg[2]
  }
  if(this.slot3 == 4){
      this.slots.children[2].children[0].src = this.srcImg[3]
  }
}    

   generateImageForSlot4(){
    if(this.slot4 == 1){
        this.slots.children[3].children[0].src = this.srcImg[0]
    }
    if(this.slot4 == 2){
      this.slots.children[3].children[0].src = this.srcImg[1]
  } 
  if(this.slot4 == 3){
      this.slots.children[3].children[0].src = this.srcImg[2]
  }
  if(this.slot4 == 4){
      this.slots.children[3].children[0].src = this.srcImg[3]
  }
}     

  ifWin(){
      if(this.slot1==this.slot2 && this.slot1 == this.slot3 && this.slot1 == this.slot4 ){
        this.scores.innerText  =  parseInt(this.scores.innerText) + 100
        alert('you win')
      }
  } 

  decBalance(){
    this.scores.innerText = this.scores.innerText - 20
  } 
   
  blockButton(){
      if(this.scores.innerText <= 20){
           this.button.disabled = true
           this.payBalance.style.display = 'block'
      }
  }

   
    
   
    generateRandom(){
        this.blockButton()
       this.slot1 = Math.floor(Math.random()*4) + 1 
       this.slot2 = Math.floor(Math.random()*4) + 1 
       this.slot3 = Math.floor(Math.random()*4) + 1 
       this.slot4 = Math.floor(Math.random()*4) + 1 
       
       
       this.generateImageForSlot1()
       this.generateImageForSlot2()
       this.generateImageForSlot3()
       this.generateImageForSlot4()

       this.decBalance()
       this.ifWin()
    }
     

 init(){
    
    this.button.addEventListener('click', this.generateRandom.bind(this))
    
 }
}

let slots = '.slots'
let scores ='.scores'
let button ='button'
let payBalance = '.pay_balance'
let srcImg = ['images/image1.png' , 'images/image2.png' ,  'images/image3.png' , 'images/image4.png']
console.dir(srcImg)

let mySlot = new SlotMachine(slots, scores, button, payBalance , srcImg)

mySlot.init()