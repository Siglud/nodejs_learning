process.on('message', data => {
    console.log('Parent process send a mesage', data)
    if (process.send !== undefined) {
        process.send({type: 'ack', data: [3]})
    }
})
