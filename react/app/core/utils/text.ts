export const copyText = (text: string) => navigator.clipboard.writeText(text);
export const confirmWhatsapp = (whatsapp: string, text: string) => {
  window.open(`https://wa.me/${whatsapp}?text=${text}`);
};
