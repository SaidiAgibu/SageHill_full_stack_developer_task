const express = require("express");
const router = express.Router();
const {writeNote,viewAllNotes,viewSingleNote,updateNote, deleteNote,search}  = require('../controllers/noteController')

router.post('/writeNotes', writeNote);
router.get('/notes', viewAllNotes);
router.get('/notes/:id', viewSingleNote)
router.put('/notes/:id', updateNote);
router.delete('/notes/:id', deleteNote);
router.get('/notes/search', search)



module.exports = router