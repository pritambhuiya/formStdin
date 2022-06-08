process.stdin.setEncoding('utf8');

const registerResponses = () => {
  let index = 0;
  const responses = [];
  console.log('hi1');

  process.stdin.on('data', (chunk) => {
    responses.push(chunk.trim());
    index++;

    if (index > 2) {
      console.log('Thank you');
      console.log(responses);
      process.stdin.destroy();
      return;
    }
    console.log('hi');
  });
};

registerResponses();
