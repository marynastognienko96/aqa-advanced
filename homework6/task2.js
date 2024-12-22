function isMajor(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

const isJohnMajor = isMajor(25)
const isAnnaMajor = isMajor(15)
console.log(isJohnMajor, isAnnaMajor)