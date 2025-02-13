import express from "express";
import bodyParser from "body-parser";
const app = express(); //สร้างตัวแปร myApp เพื่อใช้งาน express
const port = 3001; //พอร์ตของ Server ที่ใช้ในการเปิด Localhost

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Sample data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// Create
app.post("/todos", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read
app.get("/todos", (req, res) => {
  res.json(items);
});

// Read by ID
app.get("/todos/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((item) => item.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// Update
app.put("/todos/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item) => (item.id === itemId ? updatedItem : item));
  res.json(updatedItem);
});

// Delete
app.delete("/todos/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
