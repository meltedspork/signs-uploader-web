interface IDataKeys {
  [key: string]: string | any;
}

interface IResourceConstantData extends IDataKeys {
  key: string,
  resource: string,
  resources: string,
};

interface IResourcesConstantData {
  SIGN: IResourceConstantData,
  TOPIC: IResourceConstantData,
  VIDEO: IResourceConstantData,
}

export default {
  SIGN: {
    key: 'SIGN',
    resource: 'sign',
    resources: 'signs',
  },
  TOPIC: {
    key: 'TOPIC',
    resource: 'topic',
    resources: 'topics',
  },
  VIDEO: {
    key: 'VIDEO',
    resource: 'video',
    resources: 'videos',
  },
} as IResourcesConstantData;
