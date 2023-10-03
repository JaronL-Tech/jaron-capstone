import { SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true,
};

const defaultJson = {
  pages: [
    {
      name: "Name",
      elements: [
        {
          name: "FirstName",
          title: "Enter your first name:",
          type: "text",
        },
        {
          name: "LastName",
          title: "Enter your last name:",
          type: "text",
        },
        {
          name: "Anime",
          title: "Do You like Anime:",
          type: "text",
        },
        {
          name: "Comics",
          title: "Do You like Comics:",
          type: "text",
        },
        {
          name: "Dungeons and Dragons",
          title: "Are you into Dungeons and Dragons:",
          type: "text",
        },
        {
          name: "FavoriteMusicGenre",
          title: "Enter your favorite music genre:",
          type: "text",
        },
        {
          name: "FavoriteMovieGenre",
          title: "Enter your favorite movie genre:",
          type: "text",
        },
      ],
    },
  ],
};

export function SurveyCreatorWidget() {
  // ...
  creator.saveSurveyFunc = (saveNo, callback) => {
    // If you use localStorage:
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);

    // If you use a web service:
    saveSurveyJson(
      "https://your-web-service.com/",
      creator.JSON,
      saveNo,
      callback
    );
  };
  // ...
}

// If you use a web service:
function saveSurveyJson(url, json, saveNo, callback) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(json),
  })
    .then((response) => {
      if (response.ok) {
        callback(saveNo, true);
      } else {
        callback(saveNo, false);
      }
    })
    .catch((error) => {
      callback(saveNo, false);
    });
}
