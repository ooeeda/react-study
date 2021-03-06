import React from "react"
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TablePagination from '@material-ui/core/TablePagination';


const useRowStyles = makeStyles({
        root: {
                '& > *': {
                        borderBottom: 'unset',
                },
        },
});


function Row(props) {

        const { row } = props;
        const [open, setOpen] = React.useState(false);
        const classes = useRowStyles();
//{address, centerName,centerType,createdAt,facilityName,id,lat,lng,org,phoneNumber,sido,updatedAt,zipCode}
        return (
            <React.Fragment>
                    <TableRow className={classes.root}>
                            <TableCell>
                                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                    {row.sido}
                            </TableCell>
                            <TableCell align="right">{row.centerName}</TableCell>
                            <TableCell align="right">{row.org}</TableCell>
                            <TableCell align="right">{row.sigungu}</TableCell>
                            <TableCell align="right">{row.phoneNumber}</TableCell>
                    </TableRow>
                    <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                    <Typography variant="h6" gutterBottom component="div">
                                                            ????????????
                                                    </Typography>
                                                    <Table size="small" aria-label="purchases">
                                                            <TableHead>
                                                                    <TableRow>
                                                                            <TableCell align="right">????????????</TableCell>
                                                                            <TableCell align="right">?????????</TableCell>
                                                                            <TableCell align="right">??????</TableCell>
                                                                            <TableCell align="right">????????? ????????????</TableCell>
                                                                    </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                    <TableRow>
                                                                            <TableCell align="right">{row.centerType}</TableCell>
                                                                            <TableCell align="right">{row.facilityName}</TableCell>
                                                                            <TableCell align="right">{row.address}</TableCell>
                                                                            <TableCell align="right">{row.updatedAt}</TableCell>
                                                                    </TableRow>
                                                            </TableBody>
                                                    </Table>
                                            </Box>
                                    </Collapse>
                            </TableCell>
                    </TableRow>
            </React.Fragment>
        );
}

function Hospital(state){
        //console.log({address, centerName,centerType,createdAt,facilityName,id,lat,lng,org,phoneNumber,sido,updatedAt,zipCode});
        //console.log(data);
        //const rows = data.map( x=> (x.address,x.centerName,x.centerType,x.createdAt,x.facilityName,x.id,x.lat,x.lng,x.org,x.phoneNumber,x.sido,x.updatedAt,x.zipCode));
        const {data, totalCount, page:dataPage, perPage} = state.data;
        //console.log(state.data);
        console.log(React.useState(10));
        const [rowsPerPage, setRowsPerPage] = React.useState(0);

        const [page, setPage] = React.useState(0);
        const handleChangePage = (event, newPage) => {
                setPage(newPage);
        };
        const handleChangeRowsPerPage = (event) => {
                setRowsPerPage(+event.target.value);
                setPage(0);
        };
        return(


            <TableContainer component={Paper}>

                    <Table aria-label="collapsible table">
                            <TableHead>
                                    <TableRow>
                                            <TableCell />
                                            <TableCell align="right">??????</TableCell>
                                            <TableCell align="right">?????????</TableCell>
                                            <TableCell align="right">????????????</TableCell>
                                            <TableCell align="right">?????????</TableCell>
                                            <TableCell align="right">?????????</TableCell>
                                    </TableRow>
                            </TableHead>
                            <TableBody>
                                   {data.map(row => (
                                    <Row key={row.id} row={row} />
                                ))}
                            </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={totalCount}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
            </TableContainer>
        );
}
Hospital.prototype = {
        address : PropTypes.string.isRequired,
        centerName : PropTypes.string.isRequired,
        createdAt : PropTypes.string.isRequired,
        facilityName : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
        org: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        sido: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        zipCode: PropTypes.string.isRequired,
};

export default Hospital;

/*
           <h3>{address}</h3>
            <h3>{centerName}</h3>
            <h3>{centerType}</h3>
            <h3>{createdAt}</h3>
            <h3>{facilityName}</h3>
            <h3>{id}</h3>
            <h3>{lat}</h3>
            <h3>{lng}</h3>
            <h3>{org}</h3>
            <h3>{phoneNumber}</h3>
            <h3>{sido}</h3>
            <h3>{updatedAt}</h3>
            <h3>{zipCode}</h3>
                <br/><br/>

 */
