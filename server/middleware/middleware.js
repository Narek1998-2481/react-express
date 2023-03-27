import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
function middleware(app) {
    app.use(cookieParser())
    app.use('../img', express.static(path.resolve("/home/narek/Desktop/app_/server/img")));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
}

export default middleware;