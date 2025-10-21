"use client";
import { useEffect, useState } from "react";
import api from "./lib/api";
import { Button, Input, Card, Typography, Space, message, Tag } from "antd";
import LinkCard from "../components/LinkCard";

const { Title, Text } = Typography;

type Link = {
  id: number;
  legenda: string;
  url_original: string;
  codigo: string;
  cliques: number;
  criado_em: string;
  link_curto: string;
};

export default function HomePage() {
  const [links, setLinks] = useState<Link[]>([]);
  const [legenda, setLegenda] = useState("");
  const [url, setUrl] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function carregarLinks() {
    try {
      const res = await api.get<Link[]>("/links");
      setLinks(res.data);
    } catch {
      message.error("Erro ao carregar links");
    }
  }
 
  useEffect(() => {
    carregarLinks();
  }, []);

  async function criarLink() {
    if (!url.startsWith("http")) {
      return message.warning("Informe uma URL válida!");
    }
    setCarregando(true);
    try {
      const res = await api.post<Link>("/links", { legenda, url_original: url });
      message.success("Link encurtado com sucesso!");
      setLegenda("");
      setUrl("");
      setLinks((prev) => [...prev, res.data]);
    } catch {
      message.error("Erro ao criar link");
    } finally {
      setCarregando(false);
    }
  }

  async function deletarLink(id: number) {
    try {
      await api.delete(`/links/${id}`);
      setLinks((prev) => prev.filter((l) => l.id !== id));
      message.success("Link removido!");
    } catch {
      message.error("Erro ao excluir link");
    }
  }

  async function editarLink(id: number, novaLegenda: string, novaUrl: string) {
    try {
      await api.put(`/links/${id}`, {
        legenda: novaLegenda,
        url_original: novaUrl,
      });
      message.success("Link atualizado!");
      carregarLinks();
    } catch {
      message.error("Erro ao editar link");
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <Title level={2} className="text-center mb-4">
        🔗 Encurtador de Links
      </Title>
      <Text type="secondary" className="block text-center mb-8">
        Encurte, organize e acompanhe seus links com facilidade.
      </Text>

      <div className="bg-white p-6 rounded-2xl shadow-sm border mb-10">
        <Space direction="vertical" className="w-full">
          <Input
            placeholder="Legenda (ex: Site pessoal, GitHub, etc)"
            value={legenda}
            onChange={(e) => setLegenda(e.target.value)}
          />
          <Space.Compact className="w-full">
            <Input
              placeholder="Cole sua URL aqui..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Button
              type="primary"
              loading={carregando}
              onClick={criarLink}
            >
              Encurtar
            </Button>
          </Space.Compact>
        </Space>
      </div>

      <Title level={3}>Seus links</Title>
      {links.length === 0 ? (
        <Text>Nenhum link criado ainda.</Text>
      ) : (
        <div className="space-y-4 mt-4">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              onDelete={deletarLink}
              onEdit={editarLink}
            />
          ))}
        </div>
      )}
    </main>
  );
}
