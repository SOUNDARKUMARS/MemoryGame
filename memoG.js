    //card options
    const cardArray = [
        {
            name:'bigboy',
            img:'imgmemo/bigboy.png'
        },
        {
            name:'jerry',
            img:'imgmemo/jerry.png'
        },
        {
            name:'motuPatlu',
            img:'imgmemo/parman.png'
        },
        {
            name:'pinkPanther',
            img:'imgmemo/pinkPanther.png'
        },
        {
            name:'shinChan',
            img:'imgmemo/shinChan.png'
        },
        {
            name:'spongebob',
            img:'imgmemo/spongebob.png'
        },
        {
            name:'thePooh',
            img:'imgmemo/thePooh.png'
        },
        
        {
            name:'bigboy',
            img:'imgmemo/bigboy.png'
        },
        {
            name:'jerry',
            img:'imgmemo/jerry.png'
        },
        {
            name:'motuPatlu',
            img:'imgmemo/parman.png'
        },
        {
            name:'pinkPanther',
            img:'imgmemo/pinkPanther.png'
        },
        {
            name:'shinChan',
            img:'imgmemo/shinChan.png'
        },
        {
            name:'spongebob',
            img:'imgmemo/spongebob.png'
        },
        {
            name:'doreamon',
            img:'imgmemo/doreamon.png'
        },
        {
            name:'doreamon',
            img:'imgmemo/doreamon.png'
        },
        {
            name:'thePooh',
            img:'imgmemo/thePooh.png'
        }
        
    ]
    
    cardArray.sort(()=>0.5-Math.random())
    const grid=document.querySelector('#grid')
    let chosenCardArr=[]
    let chosenCardIdArr=[]
    let matchArr=[]
    let result=document.getElementById('result')

    function createCard(){
        for(let i=0; i<cardArray.length;i++){
            const cards=document.createElement('img')
            cards.setAttribute('src','imgmemo/cover.png')
            cards.setAttribute('data-id',i)
            cards.addEventListener('click',flipCard)
            grid.appendChild(cards)
        }
    }




function checkForMatch(){
    const cards=document.querySelectorAll('img')
    const firstItem=chosenCardIdArr[0]
    const secondItem=chosenCardIdArr[1]

if (firstItem==secondItem) {
    alert("you have clicked the same image")
    cards[firstItem].setAttribute('src','imgmemo/cover.png')
    cards[secondItem].setAttribute('src','imgmemo/cover.png')
}
else if(chosenCardArr[0]===chosenCardArr[1]){
    alert("you found a match!")
    cards[firstItem].setAttribute('src','imgmemo/white.jpg')
    cards[secondItem].setAttribute('src','imgmemo/white.jpg')

    cards[firstItem].removeEventListener('click',flipCard)
    cards[secondItem].removeEventListener('click',flipCard)
    matchArr.push(chosenCardIdArr)
} else {
    alert("sorry! try again")
    cards[firstItem].setAttribute('src','imgmemo/cover.png')
    cards[secondItem].setAttribute('src','imgmemo/cover.png')
}
chosenCardArr=[]
chosenCardIdArr=[]
result.textContent=matchArr.length
if(matchArr.length==cardArray.length/2){
    result.textContent=" Congratulations!! You Found Them All"

}
}
function flipCard(){
        let chosenCard=this.getAttribute('data-id')
        chosenCardArr.push(cardArray[chosenCard].name)
        chosenCardIdArr.push(chosenCard)
        this.setAttribute('src',cardArray[chosenCard].img)
        if(chosenCardArr.length==2){
            setTimeout(checkForMatch,500)
        }
}
createCard()
