const a = 78
const ah = 1.69
const b = 92
const bh = 1.95

const bmia = a / ah ** 2
const bmib = b / (bh * bh)
const markhigherbmi = bmia > bmib
console.log(bmia, bmib, markhigherbmi)
