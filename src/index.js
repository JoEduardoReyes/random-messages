const messages = ["Oscar", "ANa", "Diego", "Jessica", "Laura", "Diana"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

export default { randomMsg };
