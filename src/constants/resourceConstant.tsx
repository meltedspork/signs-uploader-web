interface IDataKeys {
  [key: string]: string | any;
}

interface IResourceConstantData extends IDataKeys {
  key: string,
  fields: string[],
  name: string,
  resource: string,
};

interface IResourcesConstantData {
  SIGN: IResourceConstantData,
  TOPIC: IResourceConstantData,
}

export default {
  SIGN: {
    key: 'SIGN',
    fields: [
      'videoUrls',
      'name',
      'pronounce',
      'definition',
    ],
    name: 'sign',
    resource: 'signs',
  },
  TOPIC: {
    key: 'TOPIC',
    fields: [
      'name',
    ],
    name: 'topic',
    resource: 'topics',
  },
} as IResourcesConstantData;
