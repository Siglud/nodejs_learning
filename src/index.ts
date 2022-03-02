import * as chalk from 'chalk'
import * as dotenv from 'dotenv'
import * as express from 'express'
import * as basic from './basic'
import * as file from 'fs'
import { isMainThread, Worker} from 'worker_threads'

const app = express()
app.use(express.json())

app.get('/', (_, res) => {
    console.log(chalk.yellow('Hi there'))
    res.send('Hi')
})

app.get('/env', (_, res) => {
    dotenv.config()
    res.send(process.env)
})

app.post('/shutdown', (_, res) => {
    res.send('bye')
    server.close()
})

app.post('/func1', (req, res) => {
    res.send(basic.sumVariadic.apply(null, req.body.para) + '')
})

app.get('/fib', (_, res) => {
    const fib = basic.createFibonacciGenerator()
    const ret = [];
    for (let i = 0; i < 10; i++) {
        ret.push(fib.next())
    }
    res.send(ret.join(','))
})

app.get('/event', (_, res) => {
    const bar = () => console.log('bar')
    const baz = () => console.log('baz')
    const foo = () => {
        console.log('foo')
        setTimeout(bar, 0)
        new Promise((resolve, _reject) => {
            resolve('should be right after baz, before bar')
        }).then(rt => console.log(rt))
        .then(__ => res.send('done'))
        baz()
    }
    foo()
})

app.post('/promise', (req, res) => {
    const done: boolean = req.body.done

    const isItDone = new Promise((resolve, reject) => {
        if (done) {
            const workDone = 'Here is the thing I built'
            resolve(workDone)
        } else {
            const why = 'Still working on something else'
            reject(why)
        }
    })

    const checkIfItsDone = () => {
        isItDone
        .then(ok => {
            console.log(ok)
            res.send(ok)
        })
        .catch(err => {
            console.error(err)
            res.send(`ERROR! ${err}`)
        })
    }

    checkIfItsDone()
})

app.get('/await', (_, res) => {
    const result: string[] = [];
    const doSomethingAsync = () => {
        return new Promise<string>(resolve => {
            setTimeout(() => {
                resolve('I did')
            }, 2000);
        })
    }

    const doSomething = async() => {
        console.log(await doSomethingAsync())
        result.push(await doSomethingAsync())
        res.send(result)
    }

    result.push('before')
    console.log('before')
    doSomething()
    console.log('After')
    result.push('After')
})

app.get('/file', (_, res) => {
    file.stat('/home/siglud/Workspace/TypeScript/nodejs_learning/README.md', (err, stats) => {
        if (err) {
            console.log(err)
            res.send(err)
            return
        }
        res.send(stats)
    })
})

app.post('/worker', (req, res) => {
    if (isMainThread) {
        function parseJSAsync(script: string) {
            return new Promise((resolve, reject) => {
                const worker = new Worker('./dist/childThread.js', {
                    workerData: script
                })
                worker.on('message', resolve)
                worker.on('error', reject)
                worker.on('exit', (code) => {
                    if (code !== 0) {
                        reject(new Error(`Worker stopped with exit code ${code}`))
                    }
                })
            })
        }
        const caller = async() => {
            console.log('start worker')
            const rex = await parseJSAsync(req.body)
            res.send(`Response from child ${rex}`)
        }

        caller();

    } else {
        res.send('Not in Main')
    }
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process end')
    })
})