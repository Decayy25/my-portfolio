import type { NextApiRequest, NextApiResponse } from "next";
import sendContactMail from "@/services/contact.service";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const result = await sendContactMail(req.body);

    if (!result.success) {
      return res.status(400).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "error in send contact",
      error,
    });
  }
};

export default handler;
