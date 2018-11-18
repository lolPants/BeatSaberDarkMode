const posScores = document.querySelectorAll('span[style="color:#F94022;"]');
const negScores = document.querySelectorAll('span[style="color:#42B129;"]');
const neuScores = document.querySelectorAll('span[style="color:#363636;"]');

negScores.forEach((score) => {score.style="color:#00ff00;"});
posScores.forEach((score) => {score.style="color:#ff0000;"});
neuScores.forEach((score) => {score.style="color:#eee;"});
