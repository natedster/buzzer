input.onButtonPressed(Button.A, function () {
    moveMotorZIP.showRainbow(1, 360)
    moveMotorZIP.show()
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 60)
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
    Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 60)
    Kitronik_Move_Motor.stop()
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 F B D G C A E ", 120)
    moveMotorZIP.clear()
})
input.onGesture(Gesture.ThreeG, function () {
    Kitronik_Move_Motor.stop()
    basic.showNumber(0)
    basic.showString("Hello!")
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playMelody("C5 B A G F E D C ", 120)
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playMelody("C D E F G A B C5 ", 120)
    music.playTone(262, music.beat(BeatFraction.Half))
})
