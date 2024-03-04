

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "admin", email: 'admin@gmail.com', password: '123', role: 'admin' },
    { id: 2, name: 'user', email: 'user@gmail.com', password: '123', role: 'user' },
  ]);
}
