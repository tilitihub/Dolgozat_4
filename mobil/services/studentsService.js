/*
* File: studentsService.js
* Author: Tiliczki Tibor
* Copyright: 2024, Tiliczki Tibor
* Group: Szoft II-1-E
* Date: 2024-04-09
* Github: https://github.com/tilitihub/Dolgozat_4.git
* Licenc: GNU GPL
*/

const host = 'http://localhost:8000/';
const endpoint = 'students';

export async function getStudents() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}