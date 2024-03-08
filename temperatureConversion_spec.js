

const fahrenheitToCelsius = require('./temperatureConversion');

describe('fahrenheitToCelsius', () => {
    it('should convert boiling temperature correctly', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it('should convert freezing temperature correctly', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it('should convert room temperature correctly', () => {
        expect(fahrenheitToCelsius(70)).toBeCloseTo(21.11, 2); 
    });
})
