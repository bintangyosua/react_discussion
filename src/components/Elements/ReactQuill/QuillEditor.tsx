import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface QuillEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function QuillEditor({ value, onChange }: QuillEditorProps) {
  const handleChange = (content: string) => {
    onChange(content);
  };
  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      style={{ height: "200px" }}
    />
  );
}
