let i = []
const f = (nullzn,a_bezzn, fzn, b_bezzn, szn, c_bezzn) => {
    let a = nullzn + a_bezzn
    let b = fzn + b_bezzn
    let c = szn + c_bezzn
    let desc = eval(b ** 2 - 4*a*c)

    let descTest = (desc ** 0.5).toString().split('')
    if (desc < 0){
        i = [
            `D = b^2 - 4ac`,
            `D = ${b_bezzn}^2 - 4 * ${a_bezzn} * ${c_bezzn} = ${desc}  (корней нет)`,
        ]
        return [
            `D = b^2 - 4ac`,
            `D = ${b_bezzn}^2 - 4 * ${a_bezzn} * ${c_bezzn} = ${desc}  (корней нет)`,
           ]
    }

    if (descTest.length > 4){
        console.log(descTest.length);
        console.log(descTest);
        i =
            (`D = b^2 - 4ac,
            D = ${b_bezzn}^2 - 4 * ${a_bezzn} * ${c_bezzn} = ${desc}  (два корня),
            x1&2 = (-b +- √D) / 2 * a,
            x1 = (-${b_bezzn} + √${desc}) / 2 * ${a_bezzn} = (-${b_bezzn} + √${desc}) / ${eval(2 * a)},
            x2 = (-${b_bezzn} - √${desc}) / 2 * ${a_bezzn} = (-${b_bezzn} - √${desc}) / ${eval(2 * a)}`).split(',')
        return
    }


    if (desc === 0){
        let x1 = eval((-1 * b + desc ** 0.5))
        x1 = x1 / eval(2*a)
        let x1Test = x1.toString().split('')
        if (x1Test.length > 4){
            x1 = eval((-1 * b + desc ** 0.5))
            x1 = `${x1} / ${eval(2*a)}`
        }
        i = [
            `D = b^2 - 4ac`,
            `D = ${b_bezzn}^2 - 4 * ${a_bezzn} * ${c_bezzn} = ${desc}  (один корень)`,
            `x1,2 = (-b +- √D) / 2 * a`,
            `x1 = (-${b_bezzn} + ${desc**0.5}) / 2 * ${a_bezzn} = ${x1}`,
            `x2 = ${x1}  (два корня как один)`]
        return [
            `D = b^2 - 4ac`,
            `D = ${b_bezzn}^2 - 4 * ${a_bezzn} * ${c_bezzn} = ${desc}  (один корень)`,
            `x1,2 = (-b +- √D) / 2 * a`,
            `x1 = (-${b_bezzn} + ${desc**0.5}) / 2 * ${a_bezzn} = ${x1}`,
            `x2 = ${x1}  (два корня как один)`]

    }
    let x1 = eval((-1 * b + desc ** 0.5))
    x1 = x1 / eval(2*a)

    let x2 = eval((-1 * b - desc ** 0.5))
    x2 = x2 / eval(2*a)

    let x1Test = x1.toString().split('')
    if (x1Test.length > 4){
        x1 = eval((-1 * b + desc ** 0.5))
        x1 = `${x1} / ${eval(2*a)}`
    }
    let x2Test = x2.toString().split('')
    if (x2Test.length > 4){
        x2 = eval((-1 * b - desc ** 0.5))
        x2 = `${x2} / ${eval(2*a)}`
    }
    i =
        (`D = b^2 - 4ac,
        D = ${b_bezzn}^2 - 4 * ${a_bezzn} * ${c_bezzn} = ${desc}  (два корня),
        x1&2 = (-b +- √D) / 2 * a,
        x1 = (-${b_bezzn} + ${desc**0.5}) / 2 * ${a_bezzn} = ${x1},
        x2 = (-${b_bezzn} - ${desc**0.5}) / 2 * ${a_bezzn} = ${x2}`).split(',')
    return [
        `D = b^2 - 4ac`,
        `D = ${b}^2 - 4 * ${a} * ${c} = ${desc} (два корня)`,
        `x1,2 = (-b +- √D) / 2 * a`,
        `x1 = (-${b_bezzn} + ${desc**0.5}) / 2 * ${a} = ${x1}`,
        `x2 = (-${b_bezzn} - ${desc**0.5}) / 2 * ${a} = ${x2}`]

}

let p = document.querySelectorAll('.inside')
let inputs = document.querySelectorAll('.mainInp')
let power_btn = document.getElementById('power_btn')
power_btn.addEventListener('click', ()=> {
    f(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value, inputs[5].value)
    p[0].innerHTML = i[0]
    p[1].innerHTML = i[1]
    p[2].innerHTML = i[2]
    p[3].innerHTML = i[3]
    p[4].innerHTML = i[4]
})




