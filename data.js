export default async function handler(request, response) {
  // 1. Maxfiy kalitni Vercel "seyfi"dan olamiz
  const apiKey = process.env.MENING_MAXFIY_KALITIM; 

  // Agar kalit yo'q bo'lsa, xato qaytaramiz
  if (!apiKey) {
    return response.status(500).json({ error: 'API kalit topilmadi' });
  }

  try {
    // 2. Haqiqiy APIga so'rov yuboramiz (Masalan, ob-havo yoki boshqa narsa)
    // Quyidagi URLni o'zingiz ishlatayotgan APIga o'zgartiring
    const targetUrl = `https://api.example.com/v1/something?key=${apiKey}`;
    
    const apiResponse = await fetch(targetUrl);
    const data = await apiResponse.json();

    // 3. Natijani o'zimizning HTML saytimizga qaytaramiz
    return response.status(200).json(data);

  } catch (error) {
    return response.status(500).json({ error: 'Xatolik yuz berdi' });
  }
}