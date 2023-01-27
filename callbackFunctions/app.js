const prom = new Promise((resolve, reject) => {
    resolve('Yay!');
  });
  
  
  const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
  
  prom.then(handleSuccess); // Prints: 'Yay!'