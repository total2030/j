input.onButtonPressed(Button.A, function () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 100, 0)
})
input.onButtonPressed(Button.AB, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
})
input.onButtonPressed(Button.B, function () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 100)
})
