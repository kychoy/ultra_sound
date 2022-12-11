let 百位 = 0
let 十位 = 0
let 个位 = 0
let 距离 = 0
// 程序中设置的引脚和实际连接的引脚应一样，intensity表示亮度，LED count表示数码管数字数量
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
tm.on()
// 让位置为2的数码管显示温度的符号‘C’，表示温度
tm.showbit(12, 2)
basic.forever(function () {
    距离 = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    个位 = 距离 % 100 % 10
    十位 = (距离 % 100 - 个位) / 10
    百位 = (距离 - 十位 * 10 - 个位) / 100
    tm.on()
    tm.showbit(百位, 0)
    tm.showbit(十位, 1)
    tm.showbit(个位, 2)
    basic.pause(2000)
})
