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

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  tableContainer: {
    maxHeight: 600,
  },
});




export const Results = () => {
  const classes = useStyles();
  const [playerData, setPlayerData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(bestPitches);
      const data = await response.text();
      let parsedData = data.split("\n").map((row) => row.split(","));
      while (parsedData.length > 0 && parsedData[parsedData.length - 1].every((cell) => !cell)) {
        parsedData.pop();
      }
      const headers = parsedData.shift();
      const players = parsedData.map((row) =>
        headers.reduce((obj, header, index) => {
          obj[header] = row[index];
          return obj;
        }, {})
      );
      setPlayerData(players);
    };
    fetchData();
  }, []);




  

  return (
    <div>

      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "player_name"}
                  direction={order}
                >
                  Player Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "pitch_type"}
                  direction={order}
                >
                  Pitch Type
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "stuffGrade"}
                  direction={order}
                >
                  Stuff Grade
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "nPitches"}
                  direction={order}
                >
                  nPitches
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