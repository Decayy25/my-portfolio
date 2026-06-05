import { ACCESS } from "@/utils/env";

const getBlogsImage = async (query: string) => {
  try {
    if (!ACCESS) {
      console.warn(
        "ACCESS key tidak ditemukan atau belum diset di .env.local",
      );
      return null;
    }

    const cleanAccess = ACCESS.trim().replace(/^["']|["']$/g, "");

    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `Client-ID ${cleanAccess}`,
        },
        next: {
          revalidate: 3500,
        },
      },
    );


    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Unsplash API Error [${res.status}]:`, errorText);
      return null;
    }

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      console.warn(`Tidak ada hasil untuk query: "${query}"`);
      return null;
    }

    const imageUrl = data.results[0].urls.regular;
    return imageUrl;
  } catch (error) {
    console.error("[getBlogsImage] Error fetching:", error);
    return null;
  }
};

export default getBlogsImage;
