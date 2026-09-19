const { validateLogin } = require('./auth');

describe('Kiểm tra hàm validateLogin', () => {
    test('Nên trả về true khi nhập đúng admin và 123', () => {
        expect(validateLogin('admin', '123')).toBe(true);
    });

    test('Nên trả về false khi sai mật khẩu', () => {
        expect(validateLogin('admin', 'wrong')).toBe(false);
    });
});

