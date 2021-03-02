import faker from 'faker/locale/en_US'

export default (req, res) => {

  let users = []
  for (let id=1; id <= 20; id++) {
    let number = `${faker.random.number()}${faker.random.number()}`
    let avatar = faker.image.image()
    let firstname = faker.name.firstName()
    let lastname = faker.name.lastName()
    let isOnline = faker.random.boolean()
    let isSeen = faker.random.boolean()
    let timeago = faker.date.recent()
    let lastMessage = faker.random.word()
    
    users.push({
      id: `10000${number}`,
      avatar,
      firstname,
      lastname,
      isOnline,
      isSeen,
      timeago,
      lastMessage
    })

  }


  res.status(200).json({ users })
}
