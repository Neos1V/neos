export default function Tooltip({ text }: { text: string }) {
  return (
    <div className="px-3.5 py-2 bg-white rounded-full border border-[#F2F3F5] shadow">
      {text}
    </div>
  );
}
