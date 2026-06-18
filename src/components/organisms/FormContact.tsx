import React, { useState } from "react";
import Form from "next/form";
import Label from "@/components/atoms/Label";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await res.json();
      return result;
    } catch {
      throw new Error();
    }
  };

  return (
    <form onSubmit={handlerSubmit} className="w-full lg:w-2/3 lg:mx-auto">
      <InputForm
        id="name"
        name="name"
        label="Nama"
        type="text"
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <InputForm
        id="email"
        name="email"
        label="Email"
        type="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="w-full px-4 mb-8" data-aos="fade-up">
        <Label htmlFor="message" title="Pesan" />
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary h-32"
        ></textarea>
      </div>

      <div className="w-full px-4">
        <Button
          type="submit"
          className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
        >
          Kirim
        </Button>
      </div>
    </form>
  );
};

export default FormContact;
