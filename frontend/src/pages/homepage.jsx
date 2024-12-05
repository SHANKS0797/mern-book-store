import { useEffect, useState } from "react";
import { getProductsList } from "../actions/actions";
export default function HomePage() {
  const [latest, setLatest] = useState([]);
  const [bestsellers, setBestsellers] = useState([]);
  const [trending, setTrending] = useState([]);
  // -------------------- INIT FETCH FUNCTION --------------------
  const initFetch = async () => {
    await getProductsList().then((res) => {
      if (res.success) {
        setLatest(res.data.filter((p) => p.isLatest));
        setBestsellers(res.data.filter((p) => p.isBestSelling));
        setTrending(res.data.filter((p) => p.isTrending));
      }
    });
  };
  useEffect(() => {
    initFetch();
  }, []);
  return (
    <div className="flex flex-col justify-start items-start w-full px-2">
      <span>Latest Releases</span>
      <div className="flex flex-row justify-start items-center gap-2 w-full">
        {latest.map((l, i) => (
          <p key={i}>{l.name}</p>
        ))}
      </div>
      <span>Trending Now</span>
      <div className="flex flex-row justify-start items-center gap-2 w-full">
        {trending.map((t, i) => (
          <p key={i}>{t.name}</p>
        ))}
      </div>
      <span>Best Selling</span>
      <div className="flex flex-row justify-start items-center gap-2 w-full">
        {bestsellers.map((b, i) => (
          <p key={i}>{b.name}</p>
        ))}
      </div>
    </div>
  );
}
