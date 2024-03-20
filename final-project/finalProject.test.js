const fp = require('./finalProject');

test('getPrices method logs expected error message when taxBoolean is not supplied', () => {
    const logSpy = jest.spyOn(console, 'log');
    fp.getPrices();
    expect(logSpy).toHaveBeenCalledWith('You need to pass a boolean to the getPrices call!');
    logSpy.mockRestore()
});

test('getPrices method applies tax when taxBoolean parameter is true', () => {
    const logSpy = jest.spyOn(console, 'log');
    fp.getPrices(true);
    // expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy.mock.calls).toContainEqual([
        'Dish: Italian pasta Price: $11.46',
        'Dish: Rice with veggies Price: $10.38',
        'Dish: Chicken with potatoes Price: $18.66',
        'Dish: Vegetarian Pizza Price: $7.74'
    ]);
    logSpy.mockRestore()
});
