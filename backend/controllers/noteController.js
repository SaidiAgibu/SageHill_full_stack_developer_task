const express = require("express");
const { Notes } = require("../models");
const {Op} = require('sequelize');


//view all notes
const viewAllNotes =  (req, res) => {
    Notes.findAll()
      .then((notes) => {
        res.json(notes);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      });
  };

  //single note
  const viewSingleNote = (req, res) => {
    const id = req.params.id;
    Notes.findByPk(id)
      .then((note) => {
        if (!note) {
          return res.status(404).json({ error: 'Note not found' });
        }
        res.json(note);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      });
  };



  //writing notes
const writeNote =   (req, res) => {
    const { title, content } = req.body;
    Notes.create({ title, content })
      .then((note) => {
        res.json(note);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      });
  };

  //updating note
  const updateNote = (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;
    Notes.findByPk(id)
      .then((note) => {
        if (!note) {
          return res.status(404).json({ error: 'Note not found' });
        }
        note.title = title;
        note.content = content;
        note.save()
          .then((updatedNote) => {
            res.json(updatedNote);
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Something went wrong' });
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      });
  };

 
// delete note
const deleteNote = (req, res) => {
    const id = req.params.id;
    Notes.destroy({
      where: {
        id: id
      }
    })
      .then((result) => {
        if (result === 0) {
          return res.status(404).json({ error: 'Note not found' });
        }
        res.json({ message: 'Note deleted successfully' });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      });
  };
  

//searching

  const search = (req, res) => {
    const query = req.query.title;
    console.log('Search query:', query);
    Notes.findAll({
      where: {
        title: {
          [Op.like]: `%${query}%`
        }
      }
    })
      .then((notes) => {
        console.log('Search results:', notes);
        res.json(notes);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      });
  };
  
  module.exports = {writeNote,viewAllNotes, viewSingleNote, updateNote,deleteNote, search}
