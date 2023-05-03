export default function handler(req, res) {
  const data = [
    { name: 'Week 1', value: 800, key: 50 },
    { name: 'Week 2', value: 300, key: 180 },
    { name: 'Week 3', value: 600, key: 250 },
    { name: 'Week 4', value: 1000, key: 300 }
  ];

  res.status(200).json(data);
}
