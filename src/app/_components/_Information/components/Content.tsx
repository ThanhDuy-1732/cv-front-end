// Styles
import { createElement } from 'react';
import styles from './Content.module.scss';
import { Title } from "@/app/_styles/common.styled";

// Types
import { IconType } from 'react-icons';
import { InfoType } from '../Information';
export type ContentProps = {
  title: InfoType,
  icon: IconType,
  content: string,
  itemClick: ({ type, value }: { type: InfoType, value: string }) => void;
}

export default function Content({ title, content, icon, itemClick }: ContentProps) {
  return (
    <>
      <div className={styles.content} onClick={() => itemClick({ type: title, value: content })}>
        <div className={styles['content__title']}>
          {createElement(icon)}
          <Title>{ title }</Title>
        </div>

        <div>{ content }</div>
      </div>
    </>
  )
}