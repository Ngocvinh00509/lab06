const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Cho phép xử lý form (POST data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Khai báo thư mục public để phục vụ HTML, CSS, JS
app.use(express.static(path.join(__dirname, 'public')));

// Route mặc định: serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// (Tùy chọn) Xử lý khi form gửi lên
app.post('/submit', (req, res) => {
  console.log(req.body); // hiển thị dữ liệu người dùng gửi lên
  res.send('Form received');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
