import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Avatar, Paper, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@material-ui/core";

import { useFoodEntry as useStyles } from "../styles/Food";
import { db } from "../core/firebase";

function FoodEntry() {
  const [food, setFood] = useState([]);
  const styles = useStyles();

  const foodRef = collection(db, "food");

  useEffect(() => {
    getDocs(foodRef).then((data) => {
      const food = data.docs.map((doc) => ({...doc.data()}));
      setFood(food);
    }).catch((err) => {
      console.log(err);
    });
  }, [foodRef]);

  return (
    <div className={styles.container}>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={styles.tableHeadCell}>Id</TableCell>
              <TableCell align="center" className={styles.tableHeadCell}>Title</TableCell>
              <TableCell align="center" className={styles.tableHeadCell}>Desc</TableCell>
              <TableCell align="center" className={styles.tableHeadCell}>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {food.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.title}</TableCell>
                <TableCell align="center">{item.desc}</TableCell>
                <TableCell align="center">
                  <Avatar
                    alt="food"
                    src={item.img}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FoodEntry;
