$(".video-play").on('click', function (e) {
    e.preventDefault();
    var vidWrap = $(this).parent(),
        iframe = vidWrap.find('.video iframe'),
        iframeSrc = iframe.attr('src'),
        iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.video-thumbnail').fadeOut();
    vidWrap.children('.video-play').fadeOut();
    vidWrap.find('.video iframe').attr('src', iframePlay);
});

function clickMenu(){
    if(itens.style.display == "block"){
        itens.style.display = "none"
    }else{
        itens.style.display = "block"
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 900){
        itens.style.display = "block"
    }else{
        itens.style.display = "none"
    }
}