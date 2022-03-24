function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") return "Pls go away and stop eating my sheep"
    let wolfNum = queue.reverse().indexOf("wolf")
    return `Oi! Sheep number ${wolfNum}! You are about to be eaten by a wolf!`
}