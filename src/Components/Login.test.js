import { render, screen } from '@testing-library/react';
import Login from './Login';  

test('El usuario actual tiene estado 0', () => {
expect(Login.currentUser).toBeNull
});