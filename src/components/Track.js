const Track = ({ isResult }) => {
  return (
    <article className="track">
      <p>1</p>
      <div className="media-info">
        <div className="poster">
          <img
            src="https://i.scdn.co/image/ab67616d00004851deec12a28d1e336c5052e9aa"
            alt="break free poster"
          />
        </div>
        <div className="info">
          <p>Break Free</p>
          <p>Ariana Grande, Zedd</p>
        </div>
      </div>
      <p>My Everything - Deluxe</p>
      <p>3:34</p>
      <span>
        {isResult ? (
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>add to playlist</title>
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        ) : (
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>remove from playlist</title>
            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        )}
      </span>
    </article>
  );
};
export default Track;
