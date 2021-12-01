const express = require("express");
const parser = require("body-parser");
const connection = require("../connection/connection");
const router = express.Router();

const jsonParser = parser.json();

router.get("/", (req, res) => {
  res.send("Welcome to the EMS");
});

router.get("/employees", (req, res) => {
  connection.query("SELECT * FROM employees", (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.get("/employees/:id", (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM employees WHERE id = " + id, (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/employees", jsonParser, (req, res) => {
  const employee = req.body;
  const insert = `INSERT INTO employees (name, salary, department) VALUES ('${employee.name}', ${employee.salary}, '${employee.department}')`;
  connection.query(insert, (err, data) => {
    if (err) throw err;
    // res.json("New Employee Added Successfully!");
    res.redirect("/api/employees");
  });
});

router.put("/employees/:id", jsonParser, (req, res) => {
  const id = req.params.id;
  const employee = req.body;
  const update = `UPDATE employees SET name = '${employee.name}', salary = ${employee.salary}, department = '${employee.department}' WHERE id = ${id}`;
  connection.query(update, (err, data) => {
    if (err) throw err;
    res.redirect("/api/employees");
  });
});

router.delete("/employees/:id", (req, res) => {
  const id = req.params.id;
  const del = `DELETE FROM employees WHERE id = ${id}`;
  connection.query(del, (err, data) => {
    if (err) throw err;
    res.redirect("/api/employees");
  });
});

module.exports = router;
