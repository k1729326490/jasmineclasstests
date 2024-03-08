const calculateMembershipCost = require('./gymMembership');

describe('calculateMembershipCost', () => {
    it('should calculate total cost with 0 friends correctly', () => {
        expect(calculateMembershipCost(50, 0)).toBe(50);
    });

    it('should calculate total cost with 1 friend correctly', () => {
        expect(calculateMembershipCost(50, 1)).toBe(47.5);
    });

    it('should calculate total cost with 2 friends correctly', () => {
        expect(calculateMembershipCost(50, 2)).toBe(45);
    });

    it('should calculate total cost with 3 friends correctly', () => {
        expect(calculateMembershipCost(50, 3)).toBe(42.5);
    });

    it('should calculate total cost with 4 friends correctly', () => {
        expect(calculateMembershipCost(50, 4)).toBe(42.5);
    });
});
