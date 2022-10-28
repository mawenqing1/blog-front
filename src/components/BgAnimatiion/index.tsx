import React, { FC, useEffect, useState, useRef, useLayoutEffect } from 'react'
import styles from './index.module.less'

const BgA: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [height, setHeight] = useState<number>(window.innerHeight)
  const [points, setPoints] = useState<any[]>([])

  const canvasDom = canvas.current
  const ctx = canvasDom?.getContext('2d')
  useEffect(() => {
    setPoints(() => {
      const arr = []
      for (let i = 0; i < 40; i++) {
        arr.push(new Point(Math.random() * width, Math.random() * height))
      };
      return arr
    })
    window.addEventListener('resize', function () {
      setWidth(this.window.innerWidth)
      setHeight(this.window.innerHeight)
      setPoints(() => {
        const arr = []
        for (let i = 0; i < 60; i++) {
          arr.push(new Point(Math.random() * width, Math.random() * height))
        };

        return arr
      })
    })
  }, [])

  useLayoutEffect(() => {
    if (canvasDom == null) return
    requestAnimationFrame(loop)
    paint()
  }, [ctx])

  class Point {
    x: number
    y: number
    r: number
    sx: number
    sy: number
    draw: (ctx: any) => void
    move: () => void
    drawLine: (ctx: any, p: any) => void
    constructor (x: number, y: number) {
      this.x = x
      this.y = y
      this.r = 1
      this.sx = Math.random() * 2 - 1
      this.sy = Math.random() * 2 - 1
      this.draw = function (ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 1 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = '#aaa'
        ctx.fill()
      }
      this.move = function () {
        this.x += this.sx / 2
        this.y += this.sy / 2
        if (this.x > width) this.sx = -Math.abs(this.sx)
        else if (this.x < 0) this.sx = Math.abs(this.sx)
        if (this.y > height) this.sy = -Math.abs(this.sy)
        else if (this.y < 0) this.sy = Math.abs(this.sy)
      }
      this.drawLine = function (ctx, p) {
        var dx = this.x - p.x
        var dy = this.y - p.y
        var d = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) {
          var alpha = (100 - d) / 100 * 1
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(p.x, p.y)
          ctx.closePath()
          ctx.strokeStyle = 'rgba(170, 170, 170, ' + alpha + ')'
          ctx.strokeWidth = 1
          ctx.stroke()
        }
      }
    }
  }

  const paint = () => {
    ctx!.clearRect(0, 0, width, height)
    for (var i = 0; i < points.length; i++) {
      points[i].move()
      points[i].draw(ctx)
      for (var j = i + 1; j < points.length; j++) {
        points[i].drawLine(ctx, points[j])
      }
    }
  }

  const loop = () => {
    requestAnimationFrame(loop)
    paint()
  }

  return (
        <div className={styles.bga_main}>
            <canvas ref={canvas} id="canvas"></canvas>
        </div>
  )
}

export default BgA
