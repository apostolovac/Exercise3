// Building a Simple Todo List Application with Priority

let todoList = [
 {
  fullName: "Marija Nikolova",
  priorityLevel: 44,
 },
 {
  fullName: "Ivana Spasova",
  priorityLevel: 68,
 },
 {
  fullName: "Dejan Angelov",
  priorityLevel: 19,
 },
 {
  fullName: "Viktorija Angelova",
  priorityLevel: 87,
 },
 {
  fullName: "Marina Donceva",
  priorityLevel: 33,
 },
];

todoList.push({
 fullName: "Verica Jovanova",
 priorityLevel: 58,
});
console.log("New todo:", todoList);

todoList.unshift({
 fullName: "Frosina Dimova",
 priorityLevel: 70,
});
console.log("New todo in the beggining", todoList);

todoList.splice(-1, 1);
console.log("Removed last todo:", todoList);

todoList[2] = {
 fullName: "Boris Fiipov",
 priorityLevel: 21,
};
console.log("Updated todo:", todoList);

const listingTodos = todoList.filter((todo) => todo.priorityLevel > 30);
console.log("listingTodos", listingTodos);
