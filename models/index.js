const Sequelize = require('sequelize');
const db = require('../config');

// Job schema(table);
module.exports  = db.define('jobs', {
    job_id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    job_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company_website: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    company_phone: {
        type: Sequelize.STRING,
        // allowNull: false
    },
    company_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    job_location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    job_resp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    job_req: {
        type: Sequelize.STRING,
        allowNull: false
    },
    job_budget: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: { 
        type: Sequelize.DATE,
        allowNull: true, 
        defaultValue: Sequelize.NOW 
    },
     updated_at: {
        type: Sequelize.DATE,
        allowNull: true, 
        defaultValue: Sequelize.NOW 
     },
     
    }, 
    {
        timestamps: false,
        underscored: true,
        freezeTableName: true
    }
);