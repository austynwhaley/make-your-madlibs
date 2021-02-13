const db = require("../models");
const mtp = require("madlibs-template-parser");

// Get all parts of a templateBody using the madlibs-template-body
function getStoryParts(templateBody) {
  console.log("Attempting to parse: " + templateBody);
  const paragraphs = mtp(templateBody);
  const firstParagraph = paragraphs[0];
  const parts = [];

  for (let i = 0; i < firstParagraph.length; i++) {
    const word = firstParagraph[i];
    parts.push({
      category: word.category,
      variant: word.variant,
      type: word.type,
      text: word.text,
    });
  }

  return parts;
}

// Filter out the blanks
function getBlanks(templateBody) {
  const allParts = getStoryParts(templateBody);
  const blanks = [];
  for (let i = 0; i < allParts.length; i++) {
    const part = allParts[i];
    if (part.type === "blank") {
      blanks.push({ index: i, category: part.category, variant: part.variant });
    }
  }
  return blanks;
}

// Piece the completed story back together by inserting the blanks
async function formStory(templateId, blanks) {
  const template = await db.Templates.findByPk(templateId);
  console.log("start " + template);

  const parts = getStoryParts(template.templateBody);
  const story = [];
  let blankIndex = 0;

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].type === "blank") {
      story.push(blanks[blankIndex]);
      blankIndex++;
    } else {
      story.push(parts[i].text);
    }
  }

  const completeStory = story.join(" ");
  return completeStory;
}

// Export the blanks and the completed story functions
module.exports = {
  getBlanks,
  formStory,
};
