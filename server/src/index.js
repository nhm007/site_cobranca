
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { initSchema } from './schema.js';
import { errorHandler } from './middleware/errorHandler.js';
import { authRoutes } from './routes/auth.routes.js';
import { clientsRoutes } from './routes/clients.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

initSchema();

app.get('/health', (req,res)=>res.json({ok:true}));
app.use('/api/auth', authRoutes);
app.use('/api/clients', clientsRoutes);

app.use(errorHandler);

app.listen(port, ()=>console.log('API rodando na porta '+port));
