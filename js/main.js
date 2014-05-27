var year = 50;

function goBack() {
    if (year >= 30) {
        year = year - 10;
        var pos = $('box').position().left;
        pos -= 44;
        $('box').animate({
            left: pos + "px"
        });
    } else if (year == 20) {
        year = 20;   
    }
    console.log(year)
};

function goForward(){
    if(year <= 70){
        year = year + 10;
        var pos = $('box').position().left;
        pos += 44;
        if (pos > $('#radioWindow').offset().left + $('#radioWindow').width()) {
            pos = $('#radioWindow').offset().left + $('#radioWindow').width() - 23;
        }
        $('box').animate({
            left: pos + "px"
        });
    }else if (year == 80){
        year = 80;   
    }
    console.log(year)
};

function playNoise(){
    if( $('box').is(":animated") ){
        alert("Yay!");
        //$('#static').get(0).play();
    }else{
        getMusic();   
    }
}

function getMusic(){
       if (year == 20)
            $('#20s').get(0).play();
        else if (year == 30)
            $('30s').get(0).play();
        else if (year == 40)
            $('40s').get(0).play();
        else if (year == 50)
            $('50s').get(0).play();
        else if (year == 60)
            $('60s').get(0).play();
        else if (year == 70)
            $('70s').get(0).play();
        else if (year == 80)
            $('80s').get(0).play();
              
}