import multer, { diskStorage } from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + "-" + file.originalname);
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, //
    fileFilter: (req, file, cb) => {
        const filetypes = /pdf/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed'));
        }
    }
});

export default upload;