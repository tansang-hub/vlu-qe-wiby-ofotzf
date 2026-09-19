const { validateLogin } = require('./login');

describe('Kiểm tra hàm validateLogin', () => {
    
    test('Nên trả về true khi nhập đúng tài khoản admin và mật khẩu 123', () => {
        expect(validateLogin('admin', '123')).toBe(true);
    });

    test('Nên trả về false khi sai tên đăng nhập', () => {
        expect(validateLogin('user', '123')).toBe(false);
    });

    test('Nên trả về false khi sai mật khẩu', () => {
        expect(validateLogin('admin', 'wrongpass')).toBe(false);
    });

    test('Nên trả về false khi để trống cả hai trường', () => {
        expect(validateLogin('', '')).toBe(false);
    });

});

