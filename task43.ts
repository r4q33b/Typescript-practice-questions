function make_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
    const car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
      manufacturer: manufacturer,
      model: model,
      options: {}
    };
  
    for (const option of options) {
      for (const key in option) {
        car.options[key] = option[key];
      }
    }
  
    return car;
  }
  
  const car = make_car('Toyota', 'Mark II', { color: 'black' }, { Traction_control: true });
  console.log(car);