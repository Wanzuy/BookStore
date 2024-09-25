import React, { useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { deleteBookById, fetchAllBooks } from "../../services/bookService";

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");

    useEffect(() => {
        const getBooks = async () => {
            const allBook = await fetchAllBooks();
            setAllBooks(allBook);
        };

        getBooks();
    }, []);

    // delete a book
    const handleDelete = async (id) => {
        try {
            const data = await deleteBookById(id);
            alert(data.message);
            setAllBooks(allBooks.filter((book) => book._id !== id));
        } catch (error) {
            console.error("Failed to delete book:", error);
            alert("Xóa sách thất bại!");
        }
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    id={`search-${dataIndex}`}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Button
                    type="primary"
                    onClick={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button
                    onClick={() => handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    Reset
                </Button>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{ color: filtered ? "#1890ff" : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                    .toString()
                    .toLowerCase()
                    .includes(value.toLowerCase())
                : "",
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(
                    () =>
                        document.getElementById(`search-${dataIndex}`).select(),
                    100
                );
            }
        },
        render: (text) =>
            searchedColumn === dataIndex && searchText ? (
                <span style={{ backgroundColor: "#ffc069", padding: 0 }}>
                    {text}
                </span>
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
        setSearchedColumn("");
    };

    const columns = [
        {
            title: "No.",
            dataIndex: "index",
            key: "index",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Tên sách",
            dataIndex: "bookTitle",
            key: "bookTitle",
            ...getColumnSearchProps("bookTitle"),
        },
        {
            title: "Tác giả",
            dataIndex: "authorName",
            key: "authorName",
            ...getColumnSearchProps("authorName"),
        },
        {
            title: "Thể loại",
            dataIndex: "category",
            key: "category",
            ...getColumnSearchProps("category"),
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price",
            render: (text) => `$${text}`,
        },
        {
            title: "Hành động",
            key: "action",
            render: (text, record) => (
                <>
                    <Link
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                        to={`/admin/dashboard/edit-book/${record._id}`}
                    >
                        Sửa
                    </Link>
                    <Button
                        onClick={() => handleDelete(record._id)}
                        type="primary"
                        danger
                    >
                        Xóa
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div className="px-4 my-2">
            <h2 className="mb-8 text-3xl font-bold">Tất Cả Sách</h2>
            <Table
                columns={columns}
                dataSource={allBooks}
                pagination={{ pageSize: 10 }}
                rowKey={(record) => record._id}
                className="lg:w-[1180px]"
            />
        </div>
    );
};

export default ManageBooks;
