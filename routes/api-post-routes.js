const express = require("express");

const { getPost, 
        deletePost,
        editPost, 
        getPosts,
        addPost 
    } = require("../controllers/api-post-controller"); 

const router = express.Router();

//Get All Posts
router.get("/api/posts", getPosts);

//Add New Post
router.post("/api/posts", addPost);

//Get Post by ID
router.get("/api/posts/:id", getPost);

//Delete Post by Id
router.delete("/api/posts/:id", deletePost);

//Update Post by ID
router.put("/api/posts/:id", editPost);

module.exports = router;