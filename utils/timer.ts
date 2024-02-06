function Timer(todo: any, time: number) {
  let timer = setTimeout(() => {
    todo
  }, time)

  return timer
}

export default Timer
