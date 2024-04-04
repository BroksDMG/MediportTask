import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import{TagsApiData} from '../types/TagsApiData';


type Order = 'asc' | 'desc';

interface HeadCell {
  disablePadding: boolean;
  id: keyof TagsApiData;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'name',
  },
  {
    id: 'count',
    numeric: true,
    disablePadding: false,
    label: 'count',
  },
  {
    id: 'has_synonyms',
    numeric: true,
    disablePadding: false,
    label: 'has synonyms?',
  },
  {
    id: 'is_moderator_only',
    numeric: true,
    disablePadding: false,
    label: 'moderator only?',
  },
  {
    id: 'is_required',
    numeric: true,
    disablePadding: false,
    label: 'required?',
  },
];
  
  interface EnhancedTableHeadProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TagsApiData) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  
 export default function EnhancedTableHead(props: EnhancedTableHeadProps) {
    const {  order, orderBy,onRequestSort } =
      props;
    const createSortHandler =
      (property: keyof TagsApiData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
  
    return (
      <TableHead>
        <TableRow>
        <TableCell/>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }