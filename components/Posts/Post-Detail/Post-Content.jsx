import ReactMarkdown from "react-markdown";
import Image from "next/legacy/image";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/router";

import styles from "./Post-Content.module.css";
import PostHeader from "./Post-Header";
import Button from "../../Button/Button";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  const router = useRouter();

  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image({ src, alt }) {
      return (
        <div className={styles.image}>
          <Image
            src={`/images/posts/${post.slug}/${src}`}
            alt={alt}
            width={600}
            height={300}
          />
        </div>
      );
    },

    paragraph({ children }) {
      return <p>{children}</p>;
    },

    code({ className, children }) {
      const language = className?.replace("language-", "");
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  function backButton() {
    router.push("/posts");
  }

  return (
    <article className={styles.content}>
      <Button onClick={backButton}>
        <FaArrowRight size={20} />
      </Button>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
