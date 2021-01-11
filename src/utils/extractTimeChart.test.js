import { extractTimeChart } from './taskManipulationUtils';

const preTaskData = [
  {
    id: '53a58ce0-822f-4dbc-b41d-bcd746d2a061',
    taskName: 'Task 53a58ce0',
    timeStart: 1610345504156,
    timeEnd: 1610347319903,
    timeSpend: 1815747,
  },
  {
    id: '8f12f8ed-4bdf-4284-8e7f-06dafdde0a8b',
    taskName: 'Task 8f12f8ed',
    timeStart: 1610347675177,
    timeEnd: 1610348322920,
    timeSpend: 647743,
  },
  {
    id: '362cac70-579f-4236-9067-ac226c17721a',
    taskName: 'Task 362cac70',
    timeStart: 1610349025095,
    timeEnd: 1610353386611,
    timeSpend: 4361516,
  },
  {
    id: 'c8e666ad-859c-47b5-bc93-1ddeb618bff2',
    taskName: 'Task c8e666ad',
    timeStart: 1610354040412,
    timeEnd: 1610355458814,
    timeSpend: 1418402,
  },
  {
    id: '93b77995-c00b-47e5-b085-9bb9a161261e',
    taskName: 'Task 93b77995',
    timeStart: 1610355813058,
    timeEnd: 1610359424511,
    timeSpend: 3611453,
  },
  {
    id: '097a7ad1-48f0-4714-b66b-9a8a4a001d9e',
    taskName: 'Task 097a7ad1',
    timeStart: 1610360105530,
    timeEnd: 1610360943736,
    timeSpend: 838206,
  },
  {
    id: '5bf43761-5b8f-4790-abb8-598f78097664',
    taskName: 'Task 5bf43761',
    timeStart: 1610361324859,
    timeEnd: 1610365542333,
    timeSpend: 4217474,
  },
  {
    id: '4c20b3ac-d15d-483c-a3c4-75718af1cc53',
    taskName: 'Task 4c20b3ac',
    timeStart: 1610366138435,
    timeEnd: 1610371003755,
    timeSpend: 4865320,
  },
  {
    id: '955d3c6c-79be-4000-824f-d6a0064f1dfd',
    taskName: 'Task 955d3c6c',
    timeStart: 1610371332025,
    timeEnd: 1610373583313,
    timeSpend: 2251288,
  },
  {
    id: '58ebf5d2-d95a-4794-b300-cc4e72dc7a25',
    taskName: 'Task 58ebf5d2',
    timeStart: 1610374024775,
    timeEnd: 1610376441375,
    timeSpend: 2416600,
  },
  {
    id: '5b76711a-920d-4f38-ae7e-d09e9019a34d',
    taskName: 'Task 5b76711a',
    timeStart: 1610376959140,
    timeEnd: 1610378155518,
    timeSpend: 1196378,
  },
  {
    id: 'ed4fef6d-a22a-465f-b7c3-538dfb143564',
    taskName: 'Task ed4fef6d',
    timeStart: 1610378613605,
    timeEnd: 1610382202020,
    timeSpend: 3588415,
  },
  {
    id: '2112770c-53c8-4b7e-80b7-8ae1282b99c5',
    taskName: 'Task 2112770c',
    timeStart: 1610382525104,
    timeEnd: 1610384759844,
    timeSpend: 2234740,
  },
  {
    id: 'e3f210b7-e7a7-4766-a265-2acc8c159622',
    taskName: 'Task e3f210b7',
    timeStart: 1610385126163,
    timeEnd: 1610389594807,
    timeSpend: 4468644,
  },
];

const afterChartData = [
  { name: '0', spendMinutes: 0 },
  { name: '1', spendMinutes: 0 },
  { name: '2', spendMinutes: 0 },
  { name: '3', spendMinutes: 0 },
  { name: '4', spendMinutes: 0 },
  { name: '5', spendMinutes: 0 },
  { name: '6', spendMinutes: 0 },
  { name: '7', spendMinutes: 0 },
  { name: '8', spendMinutes: 40 },
  { name: '9', spendMinutes: 50 },
  { name: '10', spendMinutes: 46 },
  { name: '11', spendMinutes: 57 },
  { name: '12', spendMinutes: 41 },
  { name: '13', spendMinutes: 50 },
  { name: '14', spendMinutes: 60 },
  { name: '15', spendMinutes: 53 },
  { name: '16', spendMinutes: 45 },
  { name: '17', spendMinutes: 52 },
  { name: '18', spendMinutes: 55 },
  { name: '19', spendMinutes: 53 },
  { name: '20', spendMinutes: 26 },
  { name: '21', spendMinutes: 0 },
  { name: '22', spendMinutes: 0 },
  { name: '23', spendMinutes: 0 },
];

describe('Correct chart data', () => {
  it('object with a task-information correct transform to object with an object for chart', () => {
    expect(extractTimeChart(preTaskData)).toEqual(afterChartData);
  });
});
