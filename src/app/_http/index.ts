// Utilities
import axios from "axios";
import * as process from 'process';

export const httpInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
})