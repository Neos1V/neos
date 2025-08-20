export default function Tooltip({ text }: { text: string }) {
  return (
    <div className="text-[10px] lg:text-base px-2 lg:px-3.5 py-1 lg:py-2 bg-white rounded-full border border-[#F2F3F5] shadow">
      {text}
    </div>
  );
}
