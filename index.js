
const it = (desc, fn) => {
    try {
        fn()
        console.log('\x1b[32m%s\x1b[0m', `\u2714 ${desc}`)
    } catch (error) {
        console.log('\n')
        console.log('\x1b[31m%s\x1b[0m', `\u2718 ${desc}`)
        console.error(error)
    }
}

const describe = (desc, fn) => {
    console.log('\x1b[36m%s\x1b[0m', `\u2615 ${desc}\n`)
    fn()
}

module.exports = { it, describe }