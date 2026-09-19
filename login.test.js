const { validateLogin } = require('./auth');

describe('Kiểm tra hàm validateLogin', () => {
    test('Đúng admin và 123 trả về true', () => {
        expect(validateLogin('admin', '123')).toBe(true);
    });

    test('Sai mật khẩu trả về false', () => {
        expect(validateLogin('admin', 'wrong')).toBe(false);
    });
});
