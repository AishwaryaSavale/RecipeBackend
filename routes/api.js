
const express = require('express');
const Recipe = require('../model/table');

const router = express.Router();

router.post('/addRecipe', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.send({ status: true, message: "Recipe added successfully!" });
  } catch (error) {
    res.send({ status: false, message: error.message });
  }
});

router.get('/getRecipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send({ status: true, message: recipes });
  } catch (error) {
    res.send({ status: false, message: error.message });
  }
});


router.get('/getRecipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.send({ status: false, message: 'Recipe not found' });
    }
    res.send({ status: true, message: recipe });
  } catch (error) {
    res.send({ status: false, message: error.message });
  }
});

router.put('/updateRecipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) {
      return res.send({ status: false, message: 'Recipe not found' });
    }
    res.send({ status: true, message: 'Recipe updated successfully!' });
  } catch (error) {
    res.send({ status: false, message: error.message });
  }
});

router.delete('/deleteRecipe/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.send({ status: false, message: 'Recipe not found' });
    }
    res.send({ status: true, message: 'Recipe deleted successfully!' });
  } catch (error) {
    res.send({ status: false, message: error.message });
  }
});


module.exports = router;
