input.onButtonPressed(Button.A, function () {
    kk += 1
    radio.sendValue("kk", kk)
})
input.onButtonPressed(Button.B, function () {
    mafufi += 1
    radio.sendValue("mafufi", mafufi)
})
radio.onReceivedValue(function (name, value) {
    if (name == "kk") {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (name == "mafufi") {
        music.playTone(233, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
let mafufi = 0
let kk = 0
kk = 0
mafufi = 0
radio.setGroup(1)
basic.forever(function () {
	
})
