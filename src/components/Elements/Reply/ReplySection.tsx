import { useEffect, useState } from "react";

interface Reply {
  children: string;
}

export default function ReplySection() {
  async function fetchData() {
    try {
      const result = await fetch("http://localhost:3000/api/threads/");
      if (!result.ok) throw new Error("Request Failed");
      const data = await result.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState(0);

  return (
    <div className="flex mb-4">
      <p className="text-slate-700 text-lg ml-3">Shirayuki</p>
      <div className="max-w-full max-h-full mx-5 bg-white rounded-xl">
        <p className="p-4 text-slate-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam minus
          illo placeat commodi ratione dolorum, nisi quidem dolorem qui
          doloremque reprehenderit fuga corporis architecto laboriosam error
          voluptatem, consectetur nobis perferendis. Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
}
