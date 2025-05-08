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

dotenv.config();
const app = express();
const PORT = 5000;
const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

console.log(serviceAccount)

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'gs://replica-paste.appspot.com',
});

const bucket = getStorage().bucket();
const db = getFirestore();




app.get('/', (req, res) => {
  console.log('yass')
  res.send('yasss')
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
