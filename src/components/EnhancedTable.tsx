import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';
import { useTagContext } from '../context/useTagContext';
import{TagsApiData} from '../types/TagsApiData';
import EnhancedTableRow from './EnhancedTableRow';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (typeof b[orderBy] === 'string' && typeof a[orderBy] === 'string') {
    return (b[orderBy] as string).localeCompare(a[orderBy] as string);
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: any },
  b: { [key in Key]: any },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



export default function EnhancedTable() {
  const {tags} = useTagContext();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof TagsApiData>('name');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
 
  const handleRequestSort = (
    event: React.MouseEvent<unknown, MouseEvent>,
    property: keyof TagsApiData,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

 
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tags.length) : 0;

    const visibleRows = React.useMemo(
      () =>
        stableSort(
          tags,
          getComparator(order, orderBy)
        ).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage,tags],
    );

  return (
    <Box sx={{ width: '100%' }}>
      
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50]}
          component="div"
          count={tags.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={tags.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                
                return <EnhancedTableRow row={row} key={row.name}/>;

              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50]}
          component="div"
          count={tags.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}