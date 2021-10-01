const makeRequest = (location) => {
    return new Promise((resolve, reject) => {

        console.log(`Making Request to ${location}`);
        (location === 'Google') ? (
            resolve('Google says hi')
        ) : (
            reject('We can only talk to Google')
        )
    })
}

const processRequest = (response) => {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Response Received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

async function doWork() {
    const response = await makeRequest('Google')
    console.log('Response Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
}

doWork()