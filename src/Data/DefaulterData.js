export const rows = [
  {
    id: 506933377,
    name: "Shivendra Pratap Singh",
    address: " Aliganj, Lucknow",
    osAmount: 22450,
  },
  {
    id: 598757630,
    name: "Alka Shrivastava",
    address: "Sector-H, Aliganj, Lucknow",
    osAmount: 42000,
  },
  {
    id: 4948402490,
    name: "Mahatab Ahamad",
    address: "Sector-G, Aliganj, Lucknow",
    osAmount: 4500,
  },
  {
    id: 6848698426,
    name: "Vishal Kumar Gupta",
    address: "Sector-H, RajBhawan, Lucknow",
    osAmount: 16000,
  },
  {
    id: 6751305446,
    name: "Atma Prasad",
    address: "Sector-j, Aliganj, Lucknow",
    osAmount: 100000,
  },
  { id: 6, name: "Melisandre", address: "", osAmount: 150 },
  { id: 7, name: "Clifford", address: "", osAmount: 44 },
  { id: 8, name: "Frances", address: "", osAmount: 36 },
  { id: 9, name: "Roxie", address: "", osAmount: 65 },
];

export const columns = [
  { field: "id", headerName: "ACCOUNT", width: 150 },
  { field: "name", headerName: "NAME", width: 230 },
  {
    field: "address",
    headerName: "ADDRESS",
    width: 200,
  },
  {
    field: "osAmount",
    headerName: "OUTSTANDING AMOUNT",
    type: "number",
    width: 200,
  },
  {
    field: "lasPaidDate",
    headerName: "Last Paid Date",
    type: "date",
    width: 150,
  },
];
