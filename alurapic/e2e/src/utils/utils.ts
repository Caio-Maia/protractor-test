export class Utils {

    assertToContain(atual, contem) {
        return expect(atual).toContain(contem);
    }
    assertNotToContain(atual, contem) {
        return expect(atual).not.toContain(contem);
    }
    assertEquals(esperado, atual) {​​​​​​​
        return expect(atual).toEqual(esperado);
    }
    assertNotEquals(esperado, atual) {
        return expect(atual).not.toEqual(esperado);
    }
    assertMatch(esperado, atual) {
        return expect(atual).toMatch(esperado);
    }
    async assertTrue(bool) {
        return expect(bool).toBe(true);
    }
    async assertFalse(bool) {
        return expect(bool).toBe(false);
    }
    assertLessThan(atual, esperado) {
        return expect(atual).toBeLessThan(esperado);
    }
    assertBigThan(atual, esperado) {
        return expect(atual).toBeGreaterThan(esperado);
    }
}