import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [image, setImage] = useState(undefined);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload an Image</h1>
        <input
          type="file"
          onChange={event => {
            const fileReader = new FileReader(); //use filereader class to read a file
            fileReader.readAsDataURL(event.target.files[0]); //tell the filereader to interpret as a base64 encoded string
            console.log(event.target.files[0]); //see what it looks like

            fileReader.onload = e => {
              setImage(e.target.result); //once it is loaded set the image to the loaded base64 string
              console.log(
                `The following is the image's string representation. Upload this string to the database: \n ${e.target.result}`
              );
            };
          }}
        />
        <br />
        {image && ( //if image is not undefined, render below
          <img src={image} alt="uploadedImage" style={{ width: "30vw" }} />
        )}
        <button
          onClick={() => {
            /* call your localhost api and send it the image url in the json body. make sure your db field is large enough to hold the entire string*/
          }}
        >
          Upload image to profile
        </button>
      </header>
    </div>
  );
}

export default App;
