const { DataTypes } = require('sequelize');

const Lead = require('./Lead');

const sequelize = require('../config/db');
const Interaction = sequelize.define('Interaction', {
      comment: {
            type: DataTypes.TEXT,
            allowNull: false,
      }
}, {
      timestamps: true,
      createdAt: 'created_at'
});

Interaction.belongsTo(Lead, {
      foreignKey: {
            allowNull: false
      },
      onDelete: 'CASCADE'
});



module.exports = Interaction;