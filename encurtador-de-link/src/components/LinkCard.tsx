"use client";
import { Card, Button, Input, Space, message, Tag } from "antd";
import {
  CopyOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";

type Link = {
  id: number;
  legenda: string;
  url_original: string;
  codigo: string;
  cliques: number;
  link_curto: string;
};

export default function LinkCard({
  link,
  onDelete,
  onEdit,
}: {
  link: Link;
  onDelete: (id: number) => void;
  onEdit: (id: number, legenda: string, url: string) => void;
}) {
  const [editando, setEditando] = useState(false);
  const [novaLegenda, setNovaLegenda] = useState(link.legenda);
  const [novaUrl, setNovaUrl] = useState(link.url_original);

  return (
    <Card className="shadow-sm border rounded-xl">
      {editando ? (
        <div className="space-y-2">
          <Input
            value={novaLegenda}
            onChange={(e) => setNovaLegenda(e.target.value)}
            placeholder="Nova legenda"
          />
          <Input
            value={novaUrl}
            onChange={(e) => setNovaUrl(e.target.value)}
            placeholder="Nova URL"
          />
          <Space>
            <Button
              icon={<CheckOutlined />}
              type="primary"
              onClick={() => {
                onEdit(link.id, novaLegenda, novaUrl);
                setEditando(false);
              }}
            >
              Salvar
            </Button>
            <Button
              icon={<CloseOutlined />}
              onClick={() => setEditando(false)}
            >
              Cancelar
            </Button>
          </Space>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold">{link.legenda}</h3>
          <a
            href={link.link_curto}
            target="_blank"
            className="text-blue-600"
            rel="noopener noreferrer"
          >
            {link.link_curto}
          </a>
          <p className="text-gray-500 truncate">{link.url_original}</p>
          <Tag color="blue">📈 {link.cliques} cliques</Tag>

          <Space className="mt-2">
            <Button
              icon={<CopyOutlined />}
              onClick={() => {
                navigator.clipboard.writeText(link.link_curto);
                message.success("Link copiado!");
              }}
            >
              Copiar
            </Button>
            <Button
              icon={<EditOutlined />}
              onClick={() => setEditando(true)}
            >
              Editar
            </Button>
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={() => onDelete(link.id)}
            >
              Excluir
            </Button>
          </Space>
        </>
      )}
    </Card>
  );
}
