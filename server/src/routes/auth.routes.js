
import { Router } from 'express';
import jwt from 'jsonwebtoken';

export const authRoutes = Router();

authRoutes.post('/login', (req, res)=>{
  const token = jwt.sign({user:'admin'}, 'secret');
  res.json({token});
});
