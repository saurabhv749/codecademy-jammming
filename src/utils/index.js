import {
  fetchProfile,
  getAccessToken,
  redirectToAuthCodeFlow,
} from "./spotifyAPI";

// helper functions
async function fetchWebApi(endpoint, method, body) {
  const accessToken = localStorage.getItem("access_token");
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

function formatMilliseconds(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function getTracks(tracks) {
  return tracks.map((track) => ({
    title: track.name,
    album: track.album.name,
    poster: track.album.images.find((x) => x.height === 64).url,
    artists: track.album.artists.map((x) => x.name).join(","),
    preview_url: track.preview_url,
    id: track.id,
    uri: track.uri,
    duration: formatMilliseconds(track.duration_ms),
  }));
}

// api related functions
const authenticateUser = () => redirectToAuthCodeFlow();

const getTokenAndProfile = async (authCode) => {
  const accessToken = await getAccessToken(authCode);
  const user = await fetchProfile(accessToken);
  return { user, accessToken };
};

async function getSearchResults(searchParams) {
  const { query, limit = 10, offset = 0, type = "track" } = searchParams;
  const response = await fetchWebApi(
    `v1/search?q=${query}&limit=${limit}&offset=${offset}&type=${type}`,
    "GET"
  );

  const tracks = getTracks(response.tracks.items);

  return tracks;
}

async function savePlaylistToSpotify(playlistData) {
  const { playlistName, trackIds, userID } = playlistData;
  const createPlaylistResponse = await fetchWebApi(
    `v1/users/${userID}/playlists`,
    "POST",
    {
      name: playlistName,
      description: "created via jammming",
    }
  );
  const playlistID = createPlaylistResponse.id;

  const addTracksResponse = await fetchWebApi(
    `v1/playlists/${playlistID}/tracks`,
    "POST",
    {
      uris: trackIds,
    }
  );

  return addTracksResponse;
}

export {
  authenticateUser,
  getTokenAndProfile,
  getSearchResults,
  savePlaylistToSpotify,
};
