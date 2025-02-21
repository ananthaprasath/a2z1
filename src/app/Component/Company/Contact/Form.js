"use client";
import React from "react";
import { Form, Input, Checkbox, Button, notification } from "antd";
import Link from "next/link";
import axios from "axios";

const ContactForm = () => {
  const [form] = Form.useForm(); // Initialize the form instance

  const onFinish = async (values) => {
    try {
      // Add Web3Forms access key to the form data
      const data = {
        ...values,
        access_key: "0c511151-8204-4f6f-8485-932700f9e589",
      };
            // Prepare the data for TeleCRM
            const telecrmData = {
              fields: {
                name: values.name || "",
                company: values.company || "",
                email: values.email || "",
                phone: values.phone || "",
                industry: values.industry || "",
                services: values.services ? values.services.join(", ") : "",
              },
              actions: [
                {
                  type: "SYSTEM_NOTE",
                  text: `Lead Source: Form Submission - ${values.name}`,
                },
                {
                  type: "SYSTEM_NOTE",
                  text: `Services Interested: ${values.services ? values.services.join(", ") : "None"}`,
                },
              ],
            };

      // Send form data to Web3Forms API
      const response = await axios.post("https://api.web3forms.com/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Submit data to TeleCRM
      await axios.post(
        "https://api.telecrm.in/enterprise/6794762dcb5f0836bb9c5783/autoupdatelead",
        telecrmData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 19de2e88-b716-4458-80d6-11998bda1adb1737790262325:7703cad7-ef28-4f05-a1f4-685b5ec2218d",
          },
        }
      );

      // Handle successful submission
      if (response.status === 200) {
        notification.success({
          message: "Success",
          description: "Your form has been submitted successfully!",
        });
        form.resetFields(); // Reset form fields after successful submission
      }
    } catch (error) {
      // Handle errors during submission
      notification.error({
        message: "Error",
        description: "There was an error submitting your form. Please try again later.",
      });
    }
  };

  return (
    <Form
      form={form} // Bind the form instance to the form
      name="contact-form"
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      size="large"
    >
      <Form.Item
        label={<span className="text-white">Name</span>}
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Email</span>}
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white">Phone</span>}
        name="phone"
        rules={[{ required: true, message: "Please enter your phone number" }]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>

      <Form.Item label={<span className="text-white">Note</span>} name="note">
        <Input.TextArea rows={3} placeholder="Enter your message or note" />
      </Form.Item>

      <Form.Item
        name="consent"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    new Error("You must agree to the terms and conditions")
                  ),
          },
        ]}
      >
        <Checkbox className="text-white">
          I hereby authorize to send notifications via SMS/Messages/
          Promotional/Informational messages and agree to the{" "}
          <Link href="/termsandcondition">
            Tems of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacypolicies">
            Privacy Policy
          </Link>.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-100">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
