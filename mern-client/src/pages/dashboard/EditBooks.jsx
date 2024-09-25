import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { fetchBookById, updateBookById } from "../../services/bookService";

const { TextArea } = Input;
const { Option } = Select;

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        const getBook = async () => {
            try {
                const data = await fetchBookById(id);
                setBook(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch book:", error);
            }
        };
        getBook();
    }, [id]);

    const handleBookSubmit = async (values) => {
        try {
            await updateBookById(id, values);
            alert("Cập nhật thành công!");
        } catch (error) {
            console.error("Failed to update book:", error);
            alert("Cập nhật thất bại!");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="px-4 my-2">
            <h2 className="mb-8 text-3xl font-bold">Cập Nhật Sách</h2>
            <Form
                onFinish={handleBookSubmit}
                initialValues={book}
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
                                defaultValue={book.category}
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
                        Cập nhật sách
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditBook;
