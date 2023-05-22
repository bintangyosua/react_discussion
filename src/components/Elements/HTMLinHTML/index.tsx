interface HTMLinHTMLModel {
  content: string;
}

export default function HTMLinHTML({ content }: HTMLinHTMLModel) {
  return (
    <p
      style={{ whiteSpace: "pre-wrap" }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
