// Utilities
import { memo } from 'react';

// Components
import Image from 'next/image';
import { Col, Row } from 'antd';
import Content from './components/Content';

// Styles
import styles from './Information.module.scss';

// Types
export type InformationProps = {
  avatarURL: string,
}

// Constants
import { INFORMATION_DATA } from "@/app/_data/index";

const Information = memo(function Information({ avatarURL }: InformationProps) {
  return (
    <>
      <div className={styles.information}>
        <div className={styles['information__general']}>
          <h1 className={styles['general__name']}>Ha Thanh Duy</h1>
          <i className={styles['general__title']}>Software Developer</i>
        </div>

        <Row className={styles['information__info']}>
          <Col span={12}>
            <div className={styles['info__basic']}>
              {
                INFORMATION_DATA.map((data, index) => {
                  return (
                    <Content key={`content_${index}`} title={data.title} content={data.content} icon={data.icon} />
                  )
                })
              }
            </div>
          </Col>

          <Col span={12} className={styles['info__avatar']}>
            <Image src={avatarURL} width={250} height={250} className={styles['avatar__image']} alt='Ha Thanh Duy' />
          </Col>
        </Row>
      </div>
    </>
  );
})

export default Information;