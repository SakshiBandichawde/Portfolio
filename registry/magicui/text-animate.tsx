"use client";

import { ElementType, ReactNode } from "react";
import { motion, Variants } from "motion/react";

type AnimationVariant = "fadeIn" | "blurIn" | "blurInUp" | "slideUp" | "slideLeft" | "scaleUp";
type SegmentBy = "text" | "word" | "character" | "line";
type TextElement = "article" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "p" | "section" | "span";

type TextAnimateProps = {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: TextElement;
  by?: SegmentBy;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
  accessible?: boolean;
};

const motionElements: Record<TextElement, ElementType> = {
  article: motion.article,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  span: motion.span
};

const defaultVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: (i: number) => ({ opacity: 1, transition: { delay: i * 0.08 } })
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: (i: number) => ({ opacity: 1, filter: "blur(0px)", transition: { delay: i * 0.08 } })
  },
  blurInUp: {
    hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
    show: (i: number) => ({ opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: i * 0.08 } })
  },
  slideUp: {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } })
  },
  slideLeft: {
    hidden: { opacity: 0, x: 24 },
    show: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.08 } })
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    show: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.08 } })
  }
};

function splitText(text: string, by: SegmentBy) {
  if (by === "text") return [text];
  if (by === "line") return text.split("\n");
  if (by === "character") return Array.from(text);
  return text.split(" ");
}

export function TextAnimate({
  children,
  className,
  segmentClassName,
  delay = 0,
  duration = 0.45,
  variants,
  as = "p",
  by = "word",
  startOnView = true,
  once = false,
  animation = "fadeIn",
  accessible = true
}: TextAnimateProps) {
  const MotionTag = motionElements[as];
  const segments = splitText(children, by);
  const selectedVariants = variants ?? defaultVariants[animation];

  return (
    <MotionTag
      className={className}
      aria-label={accessible ? children : undefined}
      initial="hidden"
      animate={startOnView ? undefined : "show"}
      whileInView={startOnView ? "show" : undefined}
      viewport={{ once }}
    >
      {segments.map((segment, index) => {
        const needsSpace = by === "word" && index < segments.length - 1;
        const needsBreak = by === "line" && index < segments.length - 1;

        return (
          <motion.span
            key={`${segment}-${index}`}
            aria-hidden={accessible ? true : undefined}
            className={segmentClassName}
            custom={index}
            variants={selectedVariants}
            transition={{ duration, delay: delay + index * 0.08, ease: "easeOut" }}
            style={{ display: "inline-block", whiteSpace: by === "character" ? "pre" : "normal" }}
          >
            {segment}
            {needsSpace ? "\u00A0" : null}
            {needsBreak ? <br /> : null}
          </motion.span>
        );
      }) as ReactNode}
    </MotionTag>
  );
}
