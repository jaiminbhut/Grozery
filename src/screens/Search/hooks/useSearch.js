import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Keys } from '../../../constants';
import strings from '../../../lang/strings';
import { areas, cities, states } from '../../../staticData';

const useSearch = () => {
  const [search, setSearch] = useState('');
  const route = useRoute();
  const [list, setList] = useState([]);
  const searchFor = route.params?.searchFor ?? strings.search;

  const placeholder = strings.formatString(strings.enterName, searchFor);

  useEffect(() => {
    if (search.length < 2) {
      switch (searchFor) {
        case Keys.locationSelection.state:
          setList(states);
          break;

        case Keys.locationSelection.city:
          setList(cities);
          break;

        case Keys.locationSelection.area:
          setList(areas);
          break;

        default:
          break;
      }
    }
  }, [search, searchFor]);

  const getter = {
    search,
    searchFor,
    placeholder,
    list,
  };

  const setter = {
    setSearch,
    setList,
  };

  return {
    getter,
    setter,
  };
};

export default useSearch;
