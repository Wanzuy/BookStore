import React, { useState } from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";
import { uploadBook } from "../../services/bookService";

const { TextArea } = Input;
const { Option } = Select;

const UploadBook = () => {
    const [form] = Form.useForm();
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Progamming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Seft-Help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design",
    ];

    const [selectedBookCategory, setSelectedBookCategory] = useState();

    const handleChangeSelectedValue = (value) => {
        setSelectedBookCategory(value);
    };

    //handle book submission
    const handleBookSubmit = async (values) => {
        try {
            const data = await uploadBook(values);
            alert("Thành Công!!!");
            form.resetFields();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="px-4 my-2">
            <h2 className="mb-8 text-3xl font-bold">Tải Sách Lên</h2>
            <Form
                form={form}
                onFinish={handleBookSubmit}
                layout="vertical"
                className="lg:w-[1180px]"
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="bookTitle"
                            label="Tên Sách"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập tên sách",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Tên Sách"
                                className="rounded-md border-gray-300 min-h-[40px]"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="authorName"
                            label="Tác Giả"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập tên tác giả",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Tác Giả"
                                className="rounded-md border-gray-300 min-h-[40px]"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="imageUrl"
                            label="Ảnh Sách"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập URL ảnh sách",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Ảnh Sách"
                                className="rounded-md border-gray-300 min-h-[40px]"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="category"
                            label="Thể loại"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn thể loại",
                                },
                            ]}
                        >
                            <Select
                                defaultValue={selectedBookCategory}
                                onChange={handleChangeSelectedValue}
                                className="rounded-md border-gray-300 min-h-[40px]"
                            >
                                {bookCategories.map((option) => (
                                    <Option key={option} value={option}>
                                        {option}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="price"
                            label="Giá Bán"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập giá bán",
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                placeholder="Giá Bán"
                                className="rounded-md border-gray-300 min-h-[40px]"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="bookPdfUrl"
                            label="PdfUrl Sách"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập URL PDF sách",
                                },
                            ]}
                        >
                            <Input
                                placeholder="PdfUrl Sách"
                                className="rounded-md border-gray-300 min-h-[40px]"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="bookDescription"
                    label="Mô tả sách"
                    rules={[
                        { required: true, message: "Vui lòng nhập mô tả sách" },
                    ]}
                >
                    <TextArea
                        placeholder="Để lại mô tả..."
                        rows={6}
                        className="rounded-md border-gray-300 min-h-[40px]"
                    />
                </Form.Item>
                <Form.Item className="text-right">
                    <Button type="primary" htmlType="submit">
                        Tải sách lên
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UploadBook;
