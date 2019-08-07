function takeANumber(num, name) {
  num.push(name)
  
  return `Welcome ${name}. You are number ${num} in line."`
}

function nowServing (line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }

  
  return `Currently serving ${line.shift}`
}