import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col, Select } from "antd";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
    getUserProfile,
    updateUserProfile,
} from "../../../services/userService";
import { formatDate } from "../../../utils/dateUtils";
import { phone, required } from "../../../utils/ruleUtils";
function Infor() {
    const [form] = Form.useForm();

    // lấy thông tin người dùng
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getUserProfile();
                form.setFieldsValue({
                    fullName: data.name,
                    email: data.email,
                    birthday: formatDate(data.birthday),
                    gender: data.gender,
                    phoneNumber: data.phoneNumber,
                    address: data.address,
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchUserProfile();
    }, []);

    const onFinish = (values) => {
        console.log("Form Values:", values);
        updateUserProfile(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Link to="/user/acount" className="flex gap-4 items-center mb-5">
                <ArrowLeftOutlined />
                <h2 className="text-[22px] font-bold">Thông tin cá nhân</h2>
            </Link>
            <Form
                form={form}
                name="personal_info"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="fullName" label="Họ và tên">
                            <Input
                                disabled
                                className="rounded-lg border-[#d0d0d4]"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="email" label="Email">
                            <Input
                                disabled
                                className="rounded-lg border-[#d0d0d4]"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="birthday"
                            label="Ngày sinh"
                            rules={required}
                        >
                            <Input className="rounded-lg border-[#d0d0d4]" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="gender"
                            label="Giới tính"
                            rules={required}
                        >
                            <Select className="rounded-lg border-[#d0d0d4] min-h-[41.6px]">
                                <Select.Option value="male">Nam</Select.Option>
                                <Select.Option value="female">Nữ</Select.Option>
                                <Select.Option value="other">
                                    Khác
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="phoneNumber"
                            label="Số điện thoại"
                            rules={phone}
                        >
                            <Input className="rounded-lg border-[#d0d0d4]" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={required}
                        >
                            <Input className="rounded-lg border-[#d0d0d4]" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "10px",
                        }}
                    >
                        <Link
                            to="/user/acount"
                            className="text-black flex items-center justify-center min-w-24 h-[32px] bg-[#f6f6f6] rounded-md hover:opacity-80 hover:text-black"
                        >
                            Hủy
                        </Link>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="hover:opacity-80 !bg-[#ED553B]"
                        >
                            Cập nhật
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Infor;
