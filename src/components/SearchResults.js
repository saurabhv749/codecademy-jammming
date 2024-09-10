import TrackList from "./TrackList";

const SearchResults = ({ results, addToPlaylist, changeAudioSrc }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <TrackList
        tracks={results}
        isResult={true}
        addToPlaylist={addToPlaylist}
        changeAudioSrc={changeAudioSrc}
      />
    </div>
  );
};
export default SearchResults;
