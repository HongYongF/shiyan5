const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
var maskStart = 0;
var isRun = false;
var isChoose = 0;
const maskList = [
    {
        name:'生',
        mask_x:400,
        mask_y:100,
        mask_url:'',
        mask_width:600,
        mask_height:600,
        text:{
            text_x:100,
            text_y:100,
            text_url:'',           
        }
    },{
        name:'生',
        mask_x:1400,
        mask_y:400,
        mask_url:'',
        mask_width:500,
        mask_height:450,
        text:{
            text_x:1400,
            text_y:50,
            text_url:'',           
        }
    },{
        name:'生',
        mask_x:3000,
        mask_y:400,
        mask_url:'',
        mask_width:500,
        mask_height:500,
        text:{
            text_x:2500,
            text_y:70,
            text_url:'',           
        }
    },{
        name:'生',
        mask_x:4000,
        mask_y:50,
        mask_url:'',
        mask_width:500,
        mask_height:400,
        text:{
            text_x:3600,
            text_y:400,
            text_url:'',           
        }
    }
]
var move = function(item,pos){
    let x = parseInt(item.style.left);
    if(isNaN(x))
        item.style.left = pos + 'px';
    else
        item.style.left = x + pos + 'px';
}
function moveItems(dir){
    let list = document.getElementsByClassName("moveItem");
    // console.log(list[0].style)
    if(isRun)
        clearInterval(isChoose)
    isChoose = setInterval(function(){
        for(let i = 0; i < list.length ; i++){
            move(list[i],dir*10)
        }
    },10)
    isRun = true;
    console.log(isChoose)
}
function stopMove(){
    if(isRun)
        clearInterval(isChoose)
    isRun = false
}
window.onload = function(){
    let text_list = document.getElementsByClassName("text-item");
    let mask_list = document.getElementsByClassName('mask-item');
    for(let i = 0; i < text_list.length ; i++){
        text_list[i].style.left = maskList[i].text.text_x + 'px';
        text_list[i].style.top = maskList[i].text.text_y + 'px';
        mask_list[i].style.width = maskList[i].mask_width + 'px';
        mask_list[i].style.height = maskList[i].mask_height + 'px';
        mask_list[i].style.left = maskList[i].mask_x + 'px';
        mask_list[i].style.top = maskList[i].mask_y + 'px';

    }

}