import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import { productsContext } from "../../contexts/productsContext";
import { brandsContext } from "../../contexts/brandsContext";

const AddProductModal = () => {
  const { createProduct } = useContext(productsContext)
  const {getBrands, brands} = useContext(brandsContext)
  useEffect(()=>{
      getBrands()
  }, [])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values).then(() => handleCancel())
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Watch
      </Button>
      <Modal
        title="Add Product"
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
              Add watch
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;