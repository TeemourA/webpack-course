const start = async () => {
  return await Promise.resolve('Some date returned from promise');
};

start().then(res => console.log(res));
