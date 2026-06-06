import { NextApiRequest, NextApiResponse } from "next";
import getBlogsImage from "@/components/commons/Blogs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.query;

  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const imageUrl = await getBlogsImage(query);
    if (!imageUrl) {
      console.warn(`[API] Tidak ada image URL untuk query: "${query}"`);
    }
    return res.status(200).json({ imageUrl });
  } catch (error) {
    console.error("[API] Error:", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch image", imageUrl: null });
  }
}
