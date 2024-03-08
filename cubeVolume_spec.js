

const cubeVolume = require('./cubeVolume');

describe('cubeVolume', () => {
    it('should calculate volume correctly for height 2 meters', () => {
        expect(cubeVolume(2)).toBe(8);
    });

    it('should calculate volume correctly for height 3 meters', () => {
        expect(cubeVolume(3)).toBe(27);
    });

    it('should calculate volume correctly for height 5 meters', () => {
        expect(cubeVolume(5)).toBe(125);
    });
});
