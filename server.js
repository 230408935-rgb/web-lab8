import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, 'public');

const PORT = process.env.PORT || 3000;

const COURSES = [
  { id: 1, title: 'Web Fundamentals', credits: 5 },
  { id: 2, title: 'Back-End with Node.js', credits: 6 },
  { id: 3, title: 'Databases', credits: 5 },
];

const app = express();
let requestsServed = 0;