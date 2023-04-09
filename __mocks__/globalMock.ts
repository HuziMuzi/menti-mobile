jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Somehow Platform.isTesting === undefined when running in jest:/
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const real = jest.requireActual('react-native/Libraries/Utilities/Platform');
  return {
    ...real,
    isTesting: true,
  };
});

jest.mock(
  'react-native-safe-area-context',
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  () => require('react-native-safe-area-context/jest/mock').default,
);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((_config, reducers) => reducers),
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
