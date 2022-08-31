const router = require('express').Router();
const { Category } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// GET /api/users/1
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(dbCategoryData => {
          if (!dbCategoryData) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
          }
          res.json(dbCategoryData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
      })
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    Category.update(
        {
          category_name: req.body.category_name
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(dbCategoryData => {
        if (!dbCategoryData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    Category.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCategoryData => {
          if (!dbCategoryData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbCategoryData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;