import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TagsApiData } from '../types/TagsApiData';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
 export default function EnhancedTableRow(props: { row: TagsApiData}) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {row?.collectives&&<IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>}
        </TableCell>
        <TableCell component="th" scope="row">
         <Chip label={row.name}/> 
        </TableCell>
        <TableCell align="right">{row.count}</TableCell>
        <TableCell align="right">{row.has_synonyms?<Chip color="success" label={<DoneIcon/>}/>:<Chip color="error" label={<CloseIcon/>}/>}</TableCell>
        <TableCell align="right">{row.is_moderator_only?<Chip color="success" label={<DoneIcon/>}/>:<Chip color="error" label={<CloseIcon/>}/>}</TableCell>
        <TableCell align="right">{row.is_required?<Chip color="success" label={<DoneIcon/>}/>:<Chip color="error" label={<CloseIcon/>}/>}</TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
            {row?.collectives?.map((collective) => (
              <React.Fragment key={collective.name}>
              <Typography variant="h6" gutterBottom component="div">
                {collective.name}<Chip component='a' href={"https://stackoverflow.com"+collective.link} label="..." size='small' clickable ></Chip>
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                {collective.description}
              </Typography>
                
              <Typography>Tags:</Typography>
            {collective.tags.map(tag => (
              <Chip label={tag} key={tag} />
            ))}
              </React.Fragment>
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

