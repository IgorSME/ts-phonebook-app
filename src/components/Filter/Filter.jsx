import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, changeFilterValue } from 'Redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(changeFilterValue);
  const onChangeFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <TextField
      id="filled-search"
      label="Find contacts by name"
      type="search"
      variant="standard"
      name="filter"
      value={value}
      onChange={onChangeFilter}
    />
  );
}
