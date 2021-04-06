const Sequelize = require('sequelize')

const db = new Sequelize('bloodDonorDB','admin','mypass123',{
    host : 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
})

const Donor = db.define('donors', {
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    
    name : {
        type : Sequelize.STRING,
        allowNull: false 
    },

    age : {
        type :Sequelize.INTEGER,
        allowNull : false
    },

    contact : {
        type :Sequelize.INTEGER,
        allowNull : false
    },

    city : Sequelize.STRING,

    blood_group : {
        type : Sequelize.STRING,
        allowNull : false
    },

    any_health_issues : Sequelize.STRING
})

db.sync()
  .then(() => console.log("Database has been synced"))
  .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Donor
}