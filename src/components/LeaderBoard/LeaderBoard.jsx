import React from 'react'

import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

import { useStyles } from '../LeaderBoard/styles'

export default function LeaderBoard(props) {

    const classes = useStyles();

    return (
        <>
            <Card
                variant="outlined"
                className={classes.root}
            >
                <Typography
                    variant="h5"
                    className={classes.title}>
                    Leader Board
                </Typography>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 320 }}
                        aria-label="table title"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableTitle}>Participant</TableCell>
                                <TableCell className={classes.tableTitle} align="right">Average Return</TableCell>
                                <TableCell className={classes.tableTitle}>1 Day Change</TableCell>
                                <TableCell className={classes.tableTitle}>1 Day Rank Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <div className={classes.tableRow}>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>1. Tushar L.</TableCell>
                                    <TableCell className={classes.tableCell} align="right"> 05.67% </TableCell>
                                    <TableCell className={classes.tableCell}>+ 9.4%</TableCell>
                                    <TableCell className={classes.tableCell}>2 postion Up</TableCell>
                                </TableRow>
                            </div>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell}>1. Tushar L.</TableCell>
                                <TableCell className={classes.tableCell} align="right"> 05.67% </TableCell>
                                <TableCell className={classes.tableCell}>+ 9.4%</TableCell>
                                <TableCell className={classes.tableCell}>2 postion Up</TableCell>
                            </TableRow>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell}>1. Tushar L.</TableCell>
                                <TableCell className={classes.tableCell} align="right"> 05.67% </TableCell>
                                <TableCell className={classes.tableCell}>+ 9.4%</TableCell>
                                <TableCell className={classes.tableCell}>2 postion Up</TableCell>
                            </TableRow>
                            <TableRow className={classes.tableRow}>
                                <TableCell className={classes.tableCell}>1. Tushar L.</TableCell>
                                <TableCell className={classes.tableCell} align="right"> 05.67% </TableCell>
                                <TableCell className={classes.tableCell}>+ 9.4%</TableCell>
                                <TableCell className={classes.tableCell}>2 postion Up</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}