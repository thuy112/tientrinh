// Input / select: 
var inputValue;

var inputElement = 
    document.querySelector('input[type="text"]');

inputElement.onchange = function(e) { // laays ra valiu o the input
    console.log(e.target.value);
}
inputElement.oninput = function(e) { // laays ra chuc tiep
    inputElement = e.target.value;// k in ra chi hien
}

var inputElement = 
    document.querySelector('input[type="checkbox"]');

inputElement.onchange = function(e){
    console.log(e.target.checked); // tich hay khong tich
}

var inputElement = 
    document.querySelector('select');

inputElement.onchange = function(e){
    console.log(e.target.value); 
}

// Key up / down :
var inputElement = 
    document.querySelector('input[type="text"]');

inputElement.onkeydown = function(e) { // su kien ban phim
    console.log(e);
}

//preventDefault: ngan chan moi hanh vi mac dinh xay ra
//baams vao duong link k dien ra chi co chua chu cos can bam ms ra
//lay tat ca the a
var aElements = document.links;

for (var i = 0; i < aElements.length; i++){
    aElements[i].onclick = function(e){
        console.log(e.target.href);

        //neu la trang can chuyen
        if(!e.target.href.strartsWith('https://')){
            e.preventDefault();
        }
    }
}

//stropPropagation
document.querySelector('div').onclick = 
    function() {
        console.log('DIV')
    }

document.querySelector('button').onclick = 
    function(e) {
        e.stropPropagation();
        console.log('Click me!')
    }

//event listener lang nghe su kien va huy bo lang nghe su kien
var btn = document.getElementById('btn');

btn.addEventListener('click', function(e){
    console.log(Math)
}); // ai goi trc thi vao trc goi sau thi vao sau
// huy bo lang nghe
setTimeout(function(){
    btn.removeEventListener('click', viec1)
}, 3000);



