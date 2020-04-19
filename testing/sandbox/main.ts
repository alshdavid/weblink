import crayon from 'crayon'
import { home } from './home'
import { iframe } from './iframe'
import { loadWorker } from './load-worker'

const app = crayon.create()

app.path('/', _ctx => home())
app.path('/iframe', _ctx => iframe())
app.path('/load-worker', _ctx => loadWorker())

app.load()