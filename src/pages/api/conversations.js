import faker from 'faker/locale/en_US'

export default (req, res) => {

  let conversations = [
    {
      user: [
        {
          avatar = 'https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.0-1/p100x100/136052751_3626317947451594_7571457885337414921_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGuhFFXJNPJYQPRNdenYcwk0qXfB90axAXSpd8H3RrEBUs6m2qTHd_xBYGc8r7vjrRXTmMkIibwU4fS-3YlGcX_&_nc_ohc=7PRaWyth3boAX820l85&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdvo1-1.fna&tp=6&oh=f6bf63ad0ef3673838f64cf10c8996ed&oe=607B5451',
          
        }
      ]
    },
    
  ]

  for (let id=1; id <= 10; id++) {
    let number = `${faker.random.number()}${faker.random.number()}`
    let avatar = faker.image.image()
    let firstname = faker.name.firstName()
    let lastname = faker.name.lastName()
    let isOnline = faker.random.boolean()
    let isSeen = faker.random.boolean()
    let timeago = faker.date.recent()
    let lastMessage = faker.random.word()
    
    conversations.push({
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


  res.status(200).json({ conversations })
}
