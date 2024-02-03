import React from 'react';
import styles from './pricing.module.css';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Margin } from '@mui/icons-material';

function createData(
    name: any,
    calories: any,
    fat: any,
    carbs: any,
    protein: any,
) {
    return { name, calories, fat, carbs, protein };
}

const rowsWomen = [
    createData('Schneiden (Beratung, Waschen, Kopfmassage, Föhnen)', "", "ab* 53€", "ab* 58€", "ab* 65€"),
    createData('Tönung/Färben', "ab* 40€", '', '', ''),
    createData('Strähnen', "ab* 50€", '', '', ''),
    createData('Dauerwelle', "ab* 55€", '', '', ''),
    createData('Wimpern färben', "ab* 15€", '', '', ''),
    createData('', '', "zupfen", "färben", ""),
    createData('Augenbraun', "", 'ab* 12€', 'ab* 12€', ''),
];

const rowsMan = [
    createData('Schneiden (Beratung, Waschen, Kopfmassage, Föhnen)', "ab* 40€", '', "", ""),
];

const rowsChildren = [
    createData('Haarschnitt', "ab* 19€", '', "", ""),
    createData('mit Waschen', "ab* 27€", '', "", ""),
];

const Separator = () => <div style={{ height: '50px' }}></div>; // Simple separator component


const Pricing = () => {

    return (
        <ThemeProvider theme={theme}>
            <div className={styles.pricingContainer}>

                <h1>Preisliste</h1>
                <TableContainer>
                    <Table aria-label="simple table">

                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>Damen</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right">kurz</TableCell>
                                <TableCell align="right">mittel</TableCell>
                                <TableCell align="right">lang</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rowsWomen.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <Separator />
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }} >Herren</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rowsMan.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <Separator />
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold' }}>Kinder (bis 14 Jahren)</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsChildren.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className={styles.disclaimer}>
                    <p>* nach Aufwand und Produktverbrauch</p>

                </div>
            </div>
        </ThemeProvider >
    );
}

export default Pricing;
