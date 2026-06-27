import React, { useState } from "react";
import Label from "@/components/atoms/Label";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";
import { ImSpinner9 } from "react-icons/im";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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

      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
      }

      return result;
    } catch (error) {
      console.error("Error:", error);
      throw new Error();
    } finally {
      setLoading(false);
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
        disabled={loading}
      />
      <InputForm
        id="email"
        name="email"
        label="Email"
        type="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />

      <div className="w-full px-4 mb-8" data-aos="fade-up">
        <Label htmlFor="message" title="Pesan" />
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
          className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:right-1 focus:border-primary h-32 disabled:opacity-50 disabled:cursor-not-allowed"
        ></textarea>
      </div>

      <div className="w-full px-4">
        <Button
          type="submit"
          disabled={loading}
          className="text-base font-semibold text-white bg-primary py-4 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <div className="flex justify-center items-center text-center"><ImSpinner9 className="animate-spin text-4xl"/></div> : "Kirim"}
        </Button>
      </div>
    </form>
  );
};

export default FormContact;