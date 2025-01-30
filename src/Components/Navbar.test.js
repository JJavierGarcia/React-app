import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';  

test('menuOpen es false', () => {
expect(Navbar.menuOpen).toBeFalsy
});