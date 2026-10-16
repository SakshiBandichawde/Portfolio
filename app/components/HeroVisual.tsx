import Image from "next/image";
import { ChevronDown, ChevronRight, FileCode2, Folder } from "lucide-react";
import styles from "./HeroVisual.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.editor}>
        <div className={styles.explorer} aria-hidden="true">
          <div className={styles.explorerTitle}><ChevronDown size={11} /> src</div>
          <div><Folder size={12} /> components</div>
          <div><Folder size={12} /> pages</div>
          <div><Folder size={12} /> lib</div>
          <div><Folder size={12} /> styles</div>
          <div className={styles.selected}><FileCode2 size={12} /> app.tsx</div>
          <div><ChevronRight size={10} /> globals.css</div>
        </div>
        <Image
          src="/images/hero/codeimage.png"
          alt="Code editor showing a React component"
          width={572}
          height={440}
          sizes="(max-width: 760px) 74vw, 390px"
          className={styles.codeImage}
          priority
        />
      </div>
      <span className={styles.label}>Next.js</span>
    </div>
  );
}
