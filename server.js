const express = require('express');
const path = require('path');
const app = express();

// Укажите путь к папке с собранным приложением React
app.use(express.static(path.join(__dirname, 'build')));

// Обслуживайте все запросы, отправляя index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000; // Порт для запуска сервера
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
