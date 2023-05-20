import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../Button/Index";

export default function ReactQuillComponent() {
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSubmitted = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        style={{ height: "200px" }}
      />
    </div>
  );
}
