import { SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import { SurveyCreatorComponent } from "survey-creator-react";

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

export function Survey() {
  const creator = new Survey(creatorOptions);
  creator.text =
    window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    saveSurveyJson(
      "https://dummyjson.com/products",
      creator.JSON,
      saveNo,
      callback
    );
  };
  return <SurveyCreatorComponent creator={creator} />;
}

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
export default Survey;
