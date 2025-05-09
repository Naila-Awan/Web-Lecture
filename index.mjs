import express from 'express';
import router from './server/routes/homeRoute.mjs';


const app = express();
const PORT = 3000;

app.use(router);

app.use(express.json());
app.listen(PORT, () => {    
    console.log(`Server is running on http://localhost:${PORT}`);
});