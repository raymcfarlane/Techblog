const router = require('express').Router();
const { User, Blogs} = require('../models');
const withAuth = require('../utils/auth');

// get all blogs
router.get('/', async (req, res) => {
    try {
      const blogData = await blogs.findAll();
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
      
  
  // get blog by single id
  router.get('/:id', async (req, res) => {
    console.log("fix homepage for only post:", req.params.id);
  
    try {
      const blogData = await Blogs.findByPk(req.params.id, {
        include: [{model: User}],
    });
    if (!blogData) {
        res.status(404).json({ message: 'No blog found with that id!' });
        return;
      }
      res.status(200).json(driverData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Get route for login screen
  router.get('/login', async (req, res) => {
    res.render('login');
  })
  
  // Get route for sign-up screen
  router.get('/signup', async (req, res) => {
    res.render('signup');
  });
  
  // Get route for dashboard by the user ID from the session.user.id
  router.get('/dashboard', withAuth, async (req, res) => {
    console.log("GET request for the dashboard page by author_id!");
  
    try {
   
          const userData = await Blogs.findAll({
            where: {
              author_id: req.session.user_id
            },
            include: [{model: User, attributes: ['name'], 
         },]
          });
  
        
          const userArray = userData.map(userData => userData.toJSON());
          console.log("USER DATA -----------")
          console.log(userArray);
 
          res.render('dashboard', {userArray});
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }  
  });
  
  router.get('/blogs/:id', withAuth, async (req, res) => {
  
    try {
      const blogData = await Blogs.findByPk({
        where: {
          id: req.params.id
        }
      });
  
      const Blog = blogData.map(blogData => blogData.toJSON());
      console.log(Blog);
  
      
    } catch (err) {
      res.status(500).json(err)
  
    }
  
  })
  
  module.exports = router;