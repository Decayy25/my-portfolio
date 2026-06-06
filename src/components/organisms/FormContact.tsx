import Form from "next/form";
import Label from "@/components/atoms/Label";
import Button from "@/components/atoms/Button";
import InputForm from "@/components/molecules/InputForm";

const FormContact = () => {
  return (
    <Form action="/send-contact" className="w-full lg:w-2/3 lg:mx-auto">
      <InputForm id="name" name="name" label="Nama" type="text" />
      <InputForm id="contact" name="contact" label="Email" type="email" />

      <div className="w-full px-4 mb-8">
        <Label htmlFor="message" title="Pesan" />
        <textarea
          id="name"
          name="name"
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
    </Form>
  );
};

export default FormContact;
