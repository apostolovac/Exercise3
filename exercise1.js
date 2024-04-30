//Building a Simple Library
let library = [
 {
  title: "Animal farm",
  author: "George Orwell",
  IBAN: "9780965052740",
  pages: 118,
 },
 {
  title: "The Wizard of Oz",
  author: "L. Frank Baum",
  IBAN: "9780030616617",
  pages: 219,
 },
 {
  title: "Heidi",
  author: "Johanna Spyri",
  IBAN: "9780735822276",
  pages: 330,
 },
 {
  title: "Pinocchio",
  author: "Carlo Collodi",
  IBAN: "9781590175880",
  pages: 178,
 },
];

const addBook = library.push({
 title: "Game of thrones",
 author: "David Nutter",
 IBAN: "1130228178",
 pages: 430,
});
console.log(library);
