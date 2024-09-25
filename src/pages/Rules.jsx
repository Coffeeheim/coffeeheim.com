export default function Rules() {
  return (
    <div className="space-y-2.5">
      <h2 className="font-semibold text-2xl">Rules</h2>

      <ul className="list-decimal list-inside">
        <li>It's prohibited to destroy constructions; improve them instead.</li>
        <li>
          Don't steal items from other players; be kind and ask first. This
          includes renaming portals that are not yours.
        </li>
        <li>
          You can use existing characters, but don't bring items from another
          server. Think of it as starting fresh in a new world.
        </li>
        <li>
          If someone asks for help to defeat a creature, the dropped items
          belong to the player who asked for help, even if they did the least
          part.
        </li>
      </ul>

      <div className="space-y-2.5">
        <h3 className="font-semibold text-2xl">
          Check out what our community is up to!
        </h3>
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/IAvt_V4rCa8?si=mxgF3uW9NmHFa0t-&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}
