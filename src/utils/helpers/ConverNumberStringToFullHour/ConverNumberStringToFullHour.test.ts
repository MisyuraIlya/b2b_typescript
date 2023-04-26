import { ConvertNumberStringToFullHour } from "./ConverNumberStringToFullHour";

describe('CHECK HELPER: convert number string to full hour', () => {
    test('Test time 10', () => {
        expect(ConvertNumberStringToFullHour(10)).toBe('10:00');
    })
})