import React, { useState, useEffect } from "react";
import bestPitches from "./bestPitches.csv";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// set the dimensions of the table
const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    maxHeight: 600,
  },
});

// sort the data according to the fields
const sortData = (data, orderBy, order) => {
  const sortedData = [...data];

  // sort in ascending order
  sortedData.sort((a, b) => {
    let result;
    if (order === "asc") {
      if (a[orderBy] < b[orderBy]) {
        result = -1;
      } else {
        result = 1;
      }
    } else {
      if (a[orderBy] > b[orderBy]) {
        result = -1;
      } else {
        result = 1;
      }
    }
    return result;
  });
  return sortedData;
};


export const Results = () => {
  const classes = useStyles();
  const [playerData, setPlayerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("player_name");

  // continuoslyu update the table with the csv
  useEffect(() => {
    const fetchData = async () => {
      // gett the data from csv and conver to array
      const response = await fetch(bestPitches);
      const data = await response.text();
      let parsedData = data.split("\n").map((row) => row.split(","));
      while (parsedData.length > 0 && parsedData[parsedData.length - 1].every((cell) => !cell)) {
        parsedData.pop();
      }
      // extract headers and set them as keys
      const headers = parsedData.shift();
      const players = parsedData.map((row) =>
        headers.reduce((obj, header, index) => {
          obj[header] = row[index];
          return obj;
        }, {})
      );

      // update the state upon chagne
      setPlayerData(players);
    };
    fetchData();
  }, []);

  // sort according to key
  const createSortHandler = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // filter according to player name through the search box
  const filteredData = playerData.filter((player) =>
    player.player_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = sortData(filteredData, orderBy, order);

  return (
    <div>
      <TextField
        label="Search Player"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "player_name"}
                  direction={order}
                  onClick={createSortHandler("player_name")}
                >
                  Player Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "pitch_type"}
                  direction={order}
                  onClick={createSortHandler("pitch_type")}
                >
                  Pitch Type
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "stuffGrade"}
                  direction={order}
                  onClick={createSortHandler("stuffGrade")}
                >
                  Stuff Grade
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "nPitches"}
                  direction={order}
                  onClick={createSortHandler("nPitches")}
                >
                  Number of Pitches
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.player_name}</TableCell>
                <TableCell>{row.pitch_type}</TableCell>
                <TableCell>{row.stuffGrade}</TableCell>
                <TableCell>{row.nPitches}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
