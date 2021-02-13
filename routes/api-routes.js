const express = require("express");
const router = express.Router();
const db = require("../models");
const madlibs = require("../lib/madlibs");

// Routes

// GET route on index page to display story title and teaser
router.get("/", async (req, res) => {
  // retrieve all but only display title and teaser
  try {
    const templates = await db.Templates.findAll({ raw: true });

    // render to index handlesbars
    res.render("index", { templates });
  } catch (err) {
    console.log("An error occurred:", err);
  }
});

// GET route on create page to display form for user input
router.get("/create/:id/:title", async (req, res) => {
  try {
    const template = await db.Templates.findOne({
      where: {
        title: req.params.title,
      },
    });

    const blanks = madlibs.getBlanks(template.templateBody);

    res.render("create", {
      title: template.title,
      teaser: template.teaser,
      blanks,
      id: req.params.id,
    });
  } catch (err) {
    console.log("An error occurred:", err);
  }
});

// POST route for creating story and create in db
router.post("/create/:id/:title", async (req, res) => {
  try {
    // use formStory function from madlibs.js
    const completedStory = await madlibs.formStory(req.params.id, req.body);
    const createStory = await db.Stories.create({
      title: req.params.title,
      storyBody: completedStory,
    });

    // Redirect to show completed story
    res.redirect("/result/" + createStory.id);
  } catch (err) {
    console.log("An error occured:", err);
  }
  return;
});

// GET the completed story from the db
router.get("/result/:id", async (req, res) => {
  try {
    const story = await db.Stories.findByPk(req.params.id);

    res.render("result", {
      title: story.title,
      storyBody: story.storyBody,
    });
  } catch (err) {
    console.log("An error occurred:", err);
  }
});

// GET route to render all stories
router.get("/stories", async (req, res) => {
  try {
    const stories = await db.Stories.findAll({
      raw: true,
      order: [["id", "DESC"]],
    });
    res.render("stories", { stories });
  } catch (err) {
    console.log("An error occurred:", err);
  }
});

module.exports = router;
