process.stdin.setEncoding('utf8');

const registerResponses = () => {
  let index = 0;
  process.stdin.on('data', (chunk) => {
    console.log(chunk);
    index++;

    if (index > 2) {
      console.log('Thank you');
      process.stdin.destroy();
    }
  });
  return 0;
};

registerResponses();
