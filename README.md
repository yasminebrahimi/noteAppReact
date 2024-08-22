# React Note App

## Description
This is a straightforward Note-taking application built with React. It allows users to create, manage, and view their notes in an organized manner. The app includes functionalities for adding new notes, sorting them, and viewing their status.

## Features
- **Add New Notes 📝**: Create notes by specifying a title and description. Notes are timestamped upon creation.
- **Sort Notes 🔄**: Organize notes by their creation date (latest or earliest) or by their completion status.
- **Mark as Completed ✅**: Toggle the completion status of notes to keep track of tasks.
- **Delete Notes ❌**: Remove notes that are no longer needed.
- **View Note Status 📊**: Get a quick summary of all notes, including total notes, completed notes, and open notes.

## Components
- **AddNewNote.jsx**: A form component for creating new notes. Users can input a title and description, which are dispatched to the context when the form is submitted.
- **Message.jsx**: A simple component used to display messages or alerts, such as when no notes are available.
- **NoteHandler.jsx**: Includes the `NoteHeader`, which displays the app title and the current number of notes, along with a dropdown menu to select the sorting criteria.
- **NoteList.jsx**: Displays a list of notes, sorted according to the selected criteria. It includes individual note items with options to delete or mark notes as completed.
- **NoteItem.jsx**: A sub-component within `NoteList` that represents each individual note, showing its title, description, and creation date, along with options to mark it as completed or delete it.
- **NoteStatus.jsx**: Provides a summary of notes, displaying the total number of notes, the count of completed notes, and the number of open notes.

## Preview
Here is a screenshot of the application in action:
![App Screenshot](assets/images/screenshot.png)

## Skills
- React.js
- JavaScript

## Installation
1. Clone the repository:
   https://github.com/yasminebrahimi/noteAppReact
