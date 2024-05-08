// Styles
import { createElement } from 'react';
import styles from './Content.module.scss';
import { Title } from "@/app/_styles/common.styled";

// Types
import { IconType } from 'react-icons';
export type ContentProps = {
  title: string,
  icon: IconType,
  content: string,
}

export default function Content({ title, content, icon }: ContentProps) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles['content__title']}>
          {createElement(icon)}
          <Title>{ title }</Title>
        </div>

        <div>{ content }</div>
      </div>
    </>
  )
}