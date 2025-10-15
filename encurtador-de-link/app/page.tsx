// app/page.tsx

"use client";
import { useEffect, useState } from "react";
import api from "../lib/api";
import { Card } from "antd";

type Url = {
  id: string;
  originalUrl: string;
  shortCode: string;
};

export default function HomePage() {
  const [urls, setUrls] = useState<Url[]>([]);

  useEffect(() => {
    api.get("/urls").then((res) => setUrls(res.data as Url[]));
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4"> Encurtador de URLs</h1>
      {urls.length === 0 ? (
        <p>Nenhuma URL cadastrada ainda.</p>
      ) : (
        <div className="grid gap-4">
          {urls.map((url: any) => (
            <Card key={url.id}>
              <p><strong>Original:</strong> {url.originalUrl}</p>
              <p><strong>Curto:</strong> {url.shortCode}</p>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
