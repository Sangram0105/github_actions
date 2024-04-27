import { createServer } from 'http';
import { say } from 'cowsay';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const output = say({ text: 'mooooo' });
  res.end(output);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
