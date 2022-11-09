/*
amount
accountId
to_account_id
concept
userId
*/

const validations = {
    'amount': (amount) => {
        console.log(amount)
        if (amount.value <= 0) {

            amount.classList.add("bg-red-100")
        }

        return true;

    },

}
const isValid = (formInputs) => {
    let err = false
    // Object.keys(formInputs).forEach((key) => {
    err = validations['amount'](formInputs.amount)
    if (err == true) return false
    // })
    return !err

}

export default isValid