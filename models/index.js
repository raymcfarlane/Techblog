const User = require('./User');
const Blogs = require('./Blogs');

User.hasMany(Blogs, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

Blogs.belongsTo(User, {
  foreignKey: 'author_id'
});

module.exports = { User, Blogs };
