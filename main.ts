input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . # . # .
        `)
    basic.showIcon(IconNames.Target)
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("hellotrin")
    basic.showIcon(IconNames.Target)
    basic.showNumber(63215476)
    basic.showIcon(IconNames.Heart)
})
basic.showString("hitrin")
basic.showLeds(`
    # # # # #
    # # . # #
    # . # . #
    # . # . #
    # # . # #
    `)
basic.showIcon(IconNames.Happy)
