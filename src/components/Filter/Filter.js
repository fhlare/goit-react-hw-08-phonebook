import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/filter/filterSlice";
import { selectFilter } from "../../redux/filter/filterSelectors";
import { Search, Text } from "./Filter.styled";

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <Text>
        <b>Find contact by name</b>
      </Text>
      <Search
        type="text"
        name="filter"
        placeholder="Search contacts"
        value={filterValue}
        onChange={(e)=> dispatch(setFilter(e.target.value))}
      />
    </div>
  )
}