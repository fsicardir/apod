import { format } from 'date-fns'

export interface ApodInfo {
  title: string,
  date: Date,
  url: string,
  hdurl: string,
  explanation: string,
  copyright?: string,
}

export interface ApodError {
  status: number,
  statusMsg: string,
}


const buildRequest = (date: Date): RequestInfo => {
  const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=A8KCEUDMveXLJNGDlsTpZ0k3VNtI4b8kosZ8wIpJ&hd=True&date=';
  const url = baseUrl.concat(format(date, 'yyyy-MM-dd'));
  const init: RequestInit = {
    method: 'GET',
    cache: 'force-cache',
    mode: 'cors',
  };
  return new Request(url, init);
};

const mapToError = (response: Response): ApodError => {
  return {status: response.status, statusMsg: response.statusText}
};

export const getCard = async (date: Date): Promise<ApodInfo> => {
  return fetch(buildRequest(date))
    .then((response) => {
      if (response.ok) return response.json();
      throw mapToError(response);
    })
    .catch((error) => {
      console.error('Error requesting data: ', error);
      throw error;
    })
};
