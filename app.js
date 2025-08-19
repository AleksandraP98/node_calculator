import express from 'express';
const app = express();

app.get('/add', (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);
  res.json({ result: x + y });
});

app.get('/subtract', (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);
  res.json({ result: x - y });
});

app.get('/multiply', (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);
  res.json({ result: x * y });
});

app.get('/divide', (req, res) => {
  const x = Number(req.query.x);
  const y = Number(req.query.y);
  if (y === 0) {
    res.status(400).json({ error: "Cannot divide by zero" });
  } else {
    res.json({ result: x / y });
  }
});

export default app;
