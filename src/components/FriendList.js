import Friend from './Friend'

export default function FriendList ({ friends }) {
  if (!friends) return null

  return (
    friends.map(Friend)
  )
}