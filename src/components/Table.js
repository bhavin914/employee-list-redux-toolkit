import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { deleteFormData } from "../Slices/FormSlice";

function MyTable() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (key) => {
    dispatch(deleteFormData(key));
  };

  const rowSelection = {
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: "odd",
        text: "Select Odd Rows",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys?.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });

          this.setState({ selectedRowKeys: newSelectedRowKeys });
        },
      },
    ],
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "Fullname",
      key: "Fullname",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
    {
      title: "Phone Number",
      dataIndex: "Phonenumber",
      key: "Phonenumber",
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      key: "CompanyName",
    },
    {
      title: "service Option",
      dataIndex: "serviceOption",
      key: "serviceOption",
    },

    {
      title: "budget",
      dataIndex: "budget",
      key: "budget",
      render: (status) => (
        <span>
          <Tag color={"red"}>{status}</Tag>
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <button onClick={() => handleDelete(record.key)}>Delete</button>
      ),
    },
  ];

  return (
    <Wrapper>
      <TableStyled
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        dataSource={formData.map((item, index) => ({ key: index, ...item }))}
        columns={columns}
        pagination={false}
      />
      <button onClick={() => navigate("/")} type="primary" className="button">
        Add New Data
      </button>
    </Wrapper>
  );
}

export default MyTable;

const Wrapper = styled.div`
  padding: 20px;

  .button {
    background: #4a3aff;
    height: 2.5rem;
    width: 34%;
    margin: 0 auto;
    max-width: 8rem;
    color: white;
    border: none;
    border-radius: 56px;
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    font-weight: bold;
    margin-right: 0;
  }
`;

const TableStyled = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #f0f2f5;
    color: #000;
  }
  .ant-table-tbody > tr > td {
    background-color: #fff;
  }
  .ant-table-row-selected > td {
    background-color: #e6f7ff;
  }
`;
