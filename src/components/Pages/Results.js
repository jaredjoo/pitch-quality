import React, { useState, useEffect } from "react";
import bestPitches from "./bestPitches.csv";
// import Final_Paper from "./Final_Paper.pdf";
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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
    let aValue = a[orderBy];
    let bValue = b[orderBy];

    // Convert to numbers when sorting by 'nPitches'
    if (orderBy === "nPitches") {
      aValue = parseInt(aValue, 10);
      bValue = parseInt(bValue, 10);
    }

    let result;
    if (order === "asc") {
      if (aValue < bValue) {
        result = -1;
      } else {
        result = 1;
      }
    } else {
      if (aValue > bValue) {
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

      <div style ={{textAlign: 'left', paddingLeft: '150px', marginTop: '-140px'}}>
        <h5>Player Evaluation</h5>
          <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "50px" }}>
            <li>
              The main focus of our project was to create a tool for players and coaches to be able to utilize
            </li>
            <li>
              to improve their own performance. Once we created the pitch grades, we were able to create visualizations 
            </li>
            <li>
              unique to each pitcher and their pitches to give them a sense of what they might potentially change in 
            </li>
            <li>
              order to improve. We were also able to create summary tables showing off who has the highest graded 
            </li>
            <li>
              pitches, which could also provide front offices the ability to identify players that are undervalued 
            </li>
            <li>
              by the league and acquire them for cheaper than their true value.
            </li>
          </ul>
      </div>

      <div style ={{textAlign: 'left', paddingLeft: '150px'}}>
        <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "20px" }}>
          <li>
            Below, you can find players and sort them according to their stats:
          </li>
        </ul>
      </div>
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

      <div>
        <div style={{ textAlign: "left", paddingLeft: "150px", marginTop: "40px" }}>
          <h5>Creating Pitch Grades</h5>
        
          <ul style={{ fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0, marginBottom: "50px" }}>
            <li>
              The immediate output of our model is runs, which is not easy to compare the value of one pitch to another, 
            </li>
            <li>
              so the model was converted to the 20-80 scale; a standard baseball scale that people 
            </li>
            <li>
              in baseball can easily understand. The initial attempt failed as certain pitch types tended to do 
            </li>
            <li>
              better at reducing the number of runs scored, so the solution was to grade each pitch relative to 
            </li>
            <li>
              the pitch group it belonged to and create a unique grading scale for fastballs, breaking balls, and off-speed pitches.
            </li>
          </ul>

        </div>
      </div>

      <div style={{textAlign: "left", paddingLeft: "150px", marginTop: "40px", marginBottom: "100px"}}>
        <h5>
          External Links
        </h5>

        <ul style={{fontSize: "30px", marginTop: "30px", wordWrap: "break-word", listStyle: "none", padding: 0}}>
          <li>
            For more details on our project, you can access our links to our code, final paper, and final presentation:
          </li>
          <li>
            <a href="https://git.cs.vt.edu/ryanp18/pitchqualitycapstone" target="_blank" rel="noopener noreferrer">
              Codebase
            </a>
          </li>
          <li>
            <a href="https://github.com/jaredjoo/pitch-quality" target="_blank" rel="noopener noreferrer">
              Website Codebase
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1deXiw7Ydehzv-cdbpRuYkmfM9U4aAWRw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Final Paper
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/presentation/d/1LyHSPJACWgHuDNuMPqGMHbT6fm0QwTs68J13ofhUfVU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              Final Presentation
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};



// Creating Pitch Grades
// The model's immediate output is runs, which is not easy to compare the value of one pitch to another, 
// so the model was converted to the 20-80 scale; a standard baseball scale that people 
// in baseball can easily understand. The initial attempt failed as certain pitch types tended to do 
// better at reducing the number of runs scored, so the solution was to grade each pitch relative to 
// the pitch group it belonged to and create a unique grading scale for fastballs, breaking balls, and off-speed pitches.


// Player Evaluation
// The main focus of our project was to create a tool for players and coaches to be able to utilize
// to improve their own performance. Once we created the pitch grades, we were able to create visualizations 
// unique to each pitcher and their pitches to give them a sense of what they might potentially change in 
//order to improve. We were also able to create summary tables showing off who has the highest graded 
//pitches, which could also provide front offices the ability to identify players that are undervalued 
// by the league and acquire them for cheaper than their true value.
