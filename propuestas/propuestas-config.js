const PROPUESTAS = [
  {
    id: "colun-workspace-2026",
    titulo: "Google Workspace + IA para Colun",
    cliente: "Colun S.A.",
    fecha: "2026-05-10",
    estado: "activa",
    htmlFile: "archivos/colun-workspace-2026.html",
    pdfFile: "archivos/colun-workspace-2026.pdf",
    token: "cln2026wksp",
    password: "colun2026",
    descripcion: "Programa territorial de capacitacion en Google Workspace con IA para 600 trabajadores"
  }
];

function getConfigById(id) {
  return PROPUESTAS.find(p => p.id === id) || null;
}

function getConfigByToken(token) {
  return PROPUESTAS.find(p => p.token === token) || null;
}
