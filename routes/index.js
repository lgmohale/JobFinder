const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Jobs = require('../models');


// Get list of Jobs
router.get('/', (req, res) =>
    Jobs.findAll()
    .then(jobs =>{
        console.log(jobs)
        //res.sendStatus(200)
        res.send(jobs)
    })
    .catch(err =>{
        console.log('Oops: ',err)
        res.sendStatus(500)
    })
);


// Add Jobs
router.post('/add', (req, res) =>{
    const data = req.body;

    let { job_title, company_name, company_website, company_email, company_phone, company_description, job_location, job_resp, job_req, job_budget } = data;

    Jobs.create({
        job_title,
        company_name,
        company_website,
        company_email,
        company_phone,
        company_description,
        job_location,
        job_resp,
        job_req, 
        job_budget
    })
    .then(job =>{
        console.log('Jobs added: ', job);
        res.redirect('/jobs')
    })
    .catch(err =>{
        console.log('Oops, something went wrong while adding new Job: ', err)
    })
})

// search job by title
router.get('/search', (req, res) =>{

    let { job_title } = req.body;

    Jobs.findAll({ where: { job_title: { [Op.iLike]: '%' + job_title + '%' } } })
    .then(jobs =>{
       res.send(jobs);
        console.log(jobs)
    })
    .catch(err =>{
        res.send(err);
        console.log(err)
    })
})

module.exports = router;