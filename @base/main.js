const a = 40
const ah = 1.69
const b = 81
const bh = 1.95

const bmia = a / ah ** 2
const bmib = b / (bh * bh)
const markhigherbmi = bmia > bmib
console.log(bmia, bmib, markhigherbmi)
