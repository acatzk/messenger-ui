import Friend from './Friend'

export default function FriendList ({ friends }) {
  if (!friends) return null

  return (
    <div className="py-1">
      { friends ? friends.map(Friend) : undefined}
    </div>
  )
}