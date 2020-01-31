const printTeam = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(', ')}`)
}

const team = {
  name: 'Liberty',
  coach: 'Case Penn',
  players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
}

printTeam(team.name, team.coach, ...team.players)

let cities = ['Barcelona', 'Cape Town', 'Bordeaux']
cities = [...cities, 'Santiago']

console.log(cities)

let house = {
  bedrooms: 2,
  bathrooms: 1.5,
  yearBuilt: 2017
}

let newHouse = {
  basement: true,
  bedrooms: 3,
  ...house

}
console.log(house)
console.log(newHouse)

const person = {
  name: 'Andrew',
  age: 27
}

const location = {
  city: 'Philadelphia',
  country: 'USA'
}

const overview = {
  ...person,
  ...location
}

console.log(overview)