export const requiredRule = {
    required: true,
    message: "Vui lòng nhập trường này !",
};

//rule kiểm tra số điện thoại
export const phoneRule = {
    pattern: new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/),
    message: "Số điện thoại không hợp lệ",
};

// rule kiểm tra email
export const emailRule = {
    type: "email",
    message: "Email không hợp lệ",
};

export const required = [requiredRule];
export const phone = [requiredRule, phoneRule];
