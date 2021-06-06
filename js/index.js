let pageView = "150K PAGEVIEWS";
atualizar = () => {
    //valor medido pelo slider
    document.getElementById('t_pageview').innerHTML = pageView

    let sliderValor = document.getElementById("slider").value
    document.getElementById("valor").innerHTML = ` R$ ${sliderValor}`

    console.log(sliderValor)
// De acordo com o valor, a quantidade de pageviews 
    if (sliderValor >= '16' && sliderValor <= '30') {

        pageView = "250K PAGEVIEWS"

    } else if (sliderValor >= '31' && sliderValor <= '40') {
        pageView = "350K PAGEVIEWS"
    } else {
        pageView = "450K PAGEVIEWS"
    }


}

setInterval(function () {
    atualizar();
}, 100);