# Video App
 This app is very similar to the pics app
 This is a youtube markup video. In this app we are going to enter in some search term then going to enter key which is going to trigger a search request.
 In this app we are going to make a request to a youtube public free API. With this API, we are going to do a search for a list of videos matching the search term.
 Once we get a list of videos back from the API we're going to show them on the right hand side.A user can click on one of those videos and we will feature it right in the center so the user see the video there , we will also display the discription to the bottom of the video.
  
Axios syntex :-
firstly we install it then import to our file. 

```
import axios from "axios";
const KEY = "AIzaSyCI2unyx42Y2ijqipibkYHOFkVEjvDpvS0";
export default axios.create({
  baseURL: " https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});

```
