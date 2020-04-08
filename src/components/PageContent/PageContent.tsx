import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';
import { getCard, ApodInfo, ApodError } from '../../clients/ApodClient'
import Loader from '../Loader/Loader';

enum StatusKind {
  Loading,
  Error,
  Ready,
}

interface LoadingStatus {
  statusKind: StatusKind.Loading,
}

interface ErrorStatus {
  statusKind: StatusKind.Error,
  error: ApodError,
}

interface ReadyStatus {
  statusKind: StatusKind.Ready,
  data: ApodInfo,
}

type Status = LoadingStatus | ErrorStatus | ReadyStatus

const PageContent = () => {

  const [status, setStatus] = useState<Status>({statusKind: StatusKind.Loading});

  const mapResponseToCard = (rs: ApodInfo) =>
    <Card
      title={rs.title}
      date={new Date(rs.date)}
      imgUrl={rs.url}
      hdImgUrl={rs.hdurl}
      description={rs.explanation}
      copyright={rs.copyright}
    />;

  useEffect(() => {
    getCard(new Date())
      .then((apodRs) => {
        setStatus({
          statusKind: StatusKind.Ready,
          data: apodRs,
        });
      })
      .catch((error) => {
        console.error(error);
        setStatus({
          statusKind: StatusKind.Error,
          error: error,
        })
      });
  }, []);

  const getContent = (status: Status) => {
    switch (status.statusKind) {
      case StatusKind.Ready:
        return mapResponseToCard(status.data);
      case StatusKind.Error:
        return <p>Ups! Something wrong happened</p>;
      case StatusKind.Loading:
        return <Loader/>;
    }
  };

  return (
    <main className="-width-90-percent -hm-auto">
      { getContent(status) }
      <Loader/>
    </main>
  );
};

export default PageContent;