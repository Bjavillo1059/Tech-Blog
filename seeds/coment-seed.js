const { Comment } = require("../models");

const commentData = [
  {
    blogId: 1,
    commenterId: 2,
    comment: "This was great, and easy to follow.",
  },
  {
    blogId: 1,
    commenterId: 3,
    comment: "This seemed as if it was not a lot of work.",
  },
  {
    blogId: 2,
    commenterId: 1,
    comment:
      "Styling seems easy, but I think I can do a lot more with what I am going to learn in the future.",
  },
  {
    blogId: 2,
    commenterId: 3,
    comment:
      "I like art so I wonder if this will feed into my style of aesthetics.",
  },
  {
    blogId: 3,
    commenterId: 1,
    comment:
      "This definitely seems like a lot of work and confusion on my part.",
  },
  {
    blogId: 3,
    commenterId: 2,
    comment: "I am lost and feel like deer in the headlights.",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;