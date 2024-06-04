export const formatMoney = (data: number, showCents = false, returnHyphen = false) => {
    // not rounded form
    if (returnHyphen && data === 0) {
        return '-'
    }
    const newData = Math.floor(data * 100) / 100
    const options = showCents
        ? { style: 'currency', currency: 'USD' }
        : { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }
    const newString = newData.toLocaleString('en-US', options)
    return newString
}
