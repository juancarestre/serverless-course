const hellosqs = (event,context) => {
    const body = event.body
    console.log({...body})
}

module.exports = { hellosqs }