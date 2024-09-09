import Track from "./Track";

const TrackList = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((t) => (
        <Track key={t} />
      ))}
    </div>
  );
};
export default TrackList;
