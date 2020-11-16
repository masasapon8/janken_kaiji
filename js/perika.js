$('.janken-gu').on('click', function () {
    const isWin = true

    if (isWin) {
        perika += 400
    }

    $('.kekka').text(perika + 'ペリカ')
    console.log(perika)
})