import { useState } from "react"

export function TwitterFollowCard({ name, username }) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const text = isFollowing ? ( isHovering ? 'Dejar de seguir' : 'Siguiendo' ) : 'Seguir'
  const classButton = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <article className="tw-followCard">
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${username}`}
          alt={`Avatar de ${username}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button
          className={classButton}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          { text }
        </button>
      </aside>
    </article>
  )
}