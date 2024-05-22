// Utilities
import { memo, useContext } from 'react';
import { InformationContext } from '@/app/_utils/_context';

// Components
import Image from 'next/image';
import { Col, Row } from 'antd';
import Content from './components/Content';
import { IoLogoGithub } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiPhone, CiLocationOn, CiMail } from "react-icons/ci";

// Styles
import styles from './Information.module.scss';

// Types
import { IconType } from "react-icons";
import { InformationData } from '@/app/_api/query-graphql';
export type InformationProps = {
  avatarURL: string,
}
export type Icons = {
  [key: string]: IconType;
}

// Constants
const ICONS: Icons = {
  Email: CiMail,
  Phone: CiPhone,
  Github: IoLogoGithub,
  Address: CiLocationOn,
  DOB: LiaBirthdayCakeSolid,
}

const Information = memo(function Information({ avatarURL }: InformationProps) {
  const information: InformationData = useContext(InformationContext);

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
                information.map((data, index) => {
                  return (
                    <Content key={`content_${index}`} title={data.title} content={data.content} icon={ICONS[data.title]} />
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