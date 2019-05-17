const { sayHello } = require('./index');

test('getNetworkCheckURL method without parameter', () => {
    expect(sayHello()).toBe('Hello Github Packages');
})
