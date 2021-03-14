import Friend from './Friend'

export default function FriendList ({ friends }) {
  if (!friends) return null

  return (
    <div className="py-1">
      { friends ? friends.map(Friend) : null}
      <div className="px-3 py-1.5 space-y-2">
        <div className="animate-pulse">
          <SkeletonUser />
        </div>
        <div className="animate-pulse" style={{ animationFillMode: 'backwards', animationDelay: '150ms' }}>
          <SkeletonUser />
        </div>
      </div>
    </div>
  )
}

function SkeletonUser () {
  return (
    <div className="w-full">
      <div className="flex space-x-4">
        <div className="flex-shrink-0">
          <div className="rounded-full bg-gray-100 h-14 w-14"></div>
        </div>
        <div className="flex-1 space-y-4 py-1 hidden md:block">
          <div className="space-y-3">
            <div className="h-4 bg-gray-100 rounded-full w-1/2 mr-6"></div>
            <div className="h-3 bg-gray-100 rounded-full mr-6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}