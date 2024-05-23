// Utilities
import { InformationContext } from '@/app/_utils/_context';
import { memo, useContext, useCallback, useState, useMemo } from 'react';

// Components
import Image from 'next/image';
import { Col, Row, Skeleton } from 'antd';
import Content from './components/Content';
import { IoLogoGithub } from "react-icons/io";
import MapModel from './components/MapModal/MapModal';
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

export type InfoType = 'Email' | 'Phone' | 'Github' | 'Address' | 'DOB';

// Constants
const ICONS: Icons = {
  Email: CiMail,
  Phone: CiPhone,
  Github: IoLogoGithub,
  Address: CiLocationOn,
  DOB: LiaBirthdayCakeSolid,
}

const Information = memo(function Information({ avatarURL }: InformationProps) {
  const title = useMemo((): string => {
    return 'Address Location';
  }, []);
  const location = useMemo((): { lng: number, lat: number } => {
    return {
      lat: 10.83282911,
      lng: 106.6683123,
    }
  }, []);
  const [mapVisible, setMapVisible] = useState<boolean>(false);
  const information: InformationData = useContext(InformationContext);

  const handleCloseMap = useCallback((): void => {
    setMapVisible(false);
  }, [setMapVisible])

  const handleInfoClick = useCallback(({ type, value }: { type: InfoType, value: string }): void => {
    switch (type) {
      case 'Email':
        window.location.href = `mailto:${value}`;
        break;
      case 'Phone':
        window.open(`tel:${value}`)
        break;
      case 'Github':
        window.open(value);
        break;
      case 'Address':
        setMapVisible(true);
        break;;
      default:
        break;
    }
  }, []);

  return (
    <>
      <div className={styles.information}>
        <div className={styles['information__general']}>
          <h1 className={styles['general__name']}>Ha Thanh Duy</h1>
          <i className={styles['general__title']}>Software Developer</i>
        </div>

        {
          information.length ?
          (
            <Row className={styles['information__info']}>
              <Col span={12}>
                <div className={styles['info__basic']}>
                  {
                    information.map((data, index) => {
                      return (
                        <Content key={`content_${index}`} title={data.title as InfoType} content={data.content} icon={ICONS[data.title]} itemClick={handleInfoClick} />
                      )
                    })
                  }
                </div>
              </Col>

              <Col span={12} className={styles['info__avatar']}>
                {
                  avatarURL.length ?
                  <Image src={avatarURL} width={250} height={250} className={styles['avatar__image']} alt='Ha Thanh Duy' /> :
                  <Skeleton />  
                }
              </Col>
            </Row>
          ) : (
            <Skeleton />
          )
        }
      </div>

      <MapModel title={title} location={location} visible={mapVisible} handleCancel={handleCloseMap} />
    </>
  );
})

export default Information;