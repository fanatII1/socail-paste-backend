import express from 'express';
import Mailjet from 'node-mailjet';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import tinify from "tinify";
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';
import { getFirestore } from 'firebase-admin/firestore'
import crypto from 'crypto';
import dns from 'dns';

// const serviceAccount = JSON.parse(fs.readFileSync('./serviceAccount.json', 'utf-8'));

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  console.log('yass')
  res.send('yasss')
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
