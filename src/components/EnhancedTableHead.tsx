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
  id: keyof TagsApiData; // use Data instead of TagsApiData
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'answer_id',
    numeric: true,
    disablePadding: false,
    label: 'Answer ID',
  },
  {
    id: 'content_license',
    numeric: false,
    disablePadding: false,
    label: 'Content License',
  },
  {
    id: 'creation_date',
    numeric: true,
    disablePadding: false,
    label: 'Creation Date',
  },
  {
    id: 'is_accepted',
    numeric: true,
    disablePadding: false,
    label: 'Is Accepted',
  },
  {
    id: 'last_activity_date',
    numeric: true,
    disablePadding: false,
    label: 'Last Activity Date',
  },
  // add more fields as needed
];
  
  interface EnhancedTableHeadProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TagsApiData) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
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