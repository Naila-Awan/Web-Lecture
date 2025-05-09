import express from 'express';

const showHomePage = (req, res) => {
    res.send('Welcome to the home page');
};

export default showHomePage;