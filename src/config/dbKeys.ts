interface DbKeys {
  uri: string;
  secret?: string;
}

// TODO:
// depending on env send different keys
export const dbKeys: DbKeys = { uri: 'mongodb://127.0.0.1:27017/dummyDb' };
