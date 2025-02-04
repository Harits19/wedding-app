export default function RenderError({ message }: { message?: string }) {
  if (!message) return undefined;
  return (
    <div className="text-[12px] w-full text-left text-wedRed">{message}</div>
  );
}
