import React, { useContext, useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { brandsContext } from "../../contexts/brandsContext";

const AddBrandModal = () => {
  const { createBrand } = useContext(brandsContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createBrand(values).then(() => handleCancel())
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add jewelry
      </Button>
      <Modal
        title="Add brand"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          {/* <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please input brand!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Logo"
            name="logo"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            label="Model"
            name="model"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
               <Input />
              </Form.Item>
              <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
              <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
              <Form.Item
            label="Image1"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image3"
            name="image3"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
            <Form.Item
            label="Image4"
            name="image4"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image5"
            name="image5"
            rules={[
              {
                required: true,
                message: "Please input URL of logo!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add jewelry
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddBrandModal;