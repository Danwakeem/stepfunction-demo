const handler = (event) => {
  console.log('This is the event', JSON.stringify(event, null, 2));
  return event;
}

module.exports = { handler }
