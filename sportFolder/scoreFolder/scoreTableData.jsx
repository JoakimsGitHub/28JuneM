import { footballScore } from "./footballScore";
import { handballScore } from "./handballScore";
import { basketballScore } from "./basketballScore";
import { rugbyScore } from "./rugbyScore";

export const scoreTableData = {
  football: {
    sectionClass: "sport",
    backgroundImage: "src/imageFolder/football.jpg",
    imageAlt: "Image of a football",
    heading: "Football Result",
    buttonText: "Football Button",
    table: footballScore, 
  },
  handball: {
    sectionClass: "sport",
    backgroundImage: "src/imageFolder/handball.jpeg",
    imageAlt: "Image of a handball",
    heading: "Handball Result",
    buttonText: "Handball Button",
    table: handballScore, 
  },
  basketball: {
    sectionClass: "sport",
    backgroundImage: "src/imageFolder/basketball.jpeg",
    imageAlt: "Image of a basketball",
    heading: "Basketball Result",
    buttonText: "Basketball Button",
    table: basketballScore, 
  },
  rugby: {
    sectionClass: "sport",
    backgroundImage: "src/imageFolder/rugby.jpeg",
    imageAlt: "Image of a rugby",
    heading: "Rugby Result",
    buttonText: "Rugby Button",
    table: rugbyScore, 
  },
};

export const scoreTableHeaders = ["Team", "P", "W", "D", "L", "GD", "PTS"];