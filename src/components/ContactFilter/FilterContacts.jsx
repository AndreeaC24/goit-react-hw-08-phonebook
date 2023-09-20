import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import Grid from '@mui/material/Grid';

import { selectFilters } from 'redux/contacts/selectorsContacts';
import { changeTextFilter } from 'redux/contacts/filtersSlice';
import { useStyles } from 'components/style/Styles';

export const FilterContacts = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleFilterChange = evt => {
    const name = evt.target.value;
    dispatch(changeTextFilter(name));
  };

  return (
    <div className={classes.filterForm}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <PersonSearchOutlinedIcon style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs>
          <TextField
            type="text"
            name="filter"
            value={filters.textFilter}
            onChange={handleFilterChange}
            fullWidth
            label="Find contacts by name"
            InputProps={{
              style: {
                height: '40px',
              },
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
