var fs = require('fs')
var path = require('path')
var Canvas = require('..')

var backend = new Canvas.backends.ImageBackend(800, 600)
var canvas = new Canvas(backend)
var ctx = canvas.getContext('2d')

console.log(`Width: ${canvas.width}, Height: ${canvas.height}`)

ctx.fillStyle = '#00FF00'
ctx.fillRect(50, 50, 100, 100)

var outPath = path.resolve(__dirname, 'rectangle.png')

canvas.createPNGStream().pipe(fs.createWriteStream(outPath))
