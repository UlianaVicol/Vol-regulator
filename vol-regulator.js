let volume = 50

function render(){
                                      //("input")[0]        
    let screen = document.getElementById('player').firstElementChild;
                                      //("input")[1]
    let slider = document.getElementById('player').children[1].children[1];
// variabila volume -   are rolul pentru a seta sau returna volumul audio curent al player-ului.  
    screen.value = volume
    slider.value = volume
}

function up(){
   volume++
   render()
}

function down(){
    volume--
    render()
}

function change(){

}
