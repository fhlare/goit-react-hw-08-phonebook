import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/filterSelectors';
import { InputContainer, IoSearchSharp, Search, Text } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <Text>
        Find contact by name
      </Text>
      <InputContainer>
        <Search
          type="text"
          name="filter"
          placeholder="Search contacts..."
          value={filterValue}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
        <IoSearchSharp />
      </InputContainer>
    </>
  );
};
