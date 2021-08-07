import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { DeviceEventEmitter, FlatList, SafeAreaView, View } from 'react-native';
import { BackButton, NoDataMessage } from '../../components';
import CustomTextInput from '../../components/CustomTextInput';
import { EventConsts } from '../../constants';
import strings from '../../lang/strings';
import { goBack } from '../../navigation/NavigationRef';
import Schema from '../../services/ValidationService';
import useSearch from './hooks/useSearch';
import SearchListItem from './SearchListItem';
import styles from './style';

const inputRef = {
  search: createRef(),
};

const SearchTextInput = ({
  handleBlur,
  errors,
  touched,
  values,
  handleSubmit,
  placeholder,
  setSearch,
  list,
  setList,
}) => (
  <CustomTextInput
    ref={inputRef.search}
    title={strings.search}
    value={values.search}
    placeholder={placeholder}
    error={touched.search && errors.search}
    returnKeyType={'done'}
    onSubmitEditing={handleSubmit}
    onBlur={handleBlur('search')}
    onChangeText={(value) =>
      handleSearchTextChange(value, setSearch, list, setList)
    }
  />
);

const handleSearchTextChange = (value, setSearch, list, setList) => {
  setSearch(value);

  const newList = list.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()),
  );

  setList(newList);
};

const RenderSearchForm = ({
  placeholder,
  search,
  setSearch,
  list,
  setList,
  submit,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ search: search }}
      validationSchema={Schema.search}
      onSubmit={(values) => {}}>
      {({ ...params }) => (
        <RenderSearchFormInputs
          list={list}
          setList={setList}
          params={params}
          setSearch={setSearch}
          placeholder={placeholder}
        />
      )}
    </Formik>
  );
};

const RenderSearchFormInputs = ({
  params,
  list,
  setList,
  setSearch,
  placeholder,
}) => (
  <View style={styles.formInputs}>
    <SearchTextInput
      {...params}
      placeholder={placeholder}
      setSearch={setSearch}
      list={list}
      setList={setList}
    />
  </View>
);

const RenderSearchList = ({ data, searchFor }) => {
  return (
    <FlatList
      listKey={(item, index) => index.toString()}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
      data={data}
      ListEmptyComponent={() => (
        <NoDataMessage message={strings.noSearchResultFound} />
      )}
      keyExtractor={({ id }, index) => index}
      renderItem={({ item, index }) => (
        <SearchListItem
          row={item}
          onRowAction={() => handleItemClickAction(item, searchFor)}
        />
      )}
    />
  );
};

const handleItemClickAction = (item, searchFor) => {
  const selectedValue = {
    [searchFor]: item?.title,
  };

  DeviceEventEmitter.emit(EventConsts.selection, selectedValue);
  goBack();
};

const SearchScreen = () => {
  const { getter, setter } = useSearch();

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <BackButton />
      <RenderSearchForm {...getter} {...setter} />
      <RenderSearchList data={getter.list} {...getter} />
    </View>
  );
};

SearchTextInput.propTypes = {
  errors: PropTypes.object,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  list: PropTypes.array,
  placeholder: PropTypes.string,
  setList: PropTypes.func,
  setSearch: PropTypes.func,
  touched: PropTypes.object,
  values: PropTypes.object,
};
RenderSearchForm.propTypes = {
  list: PropTypes.array,
  placeholder: PropTypes.string,
  search: PropTypes.string,
  setList: PropTypes.func,
  setSearch: PropTypes.func,
  submit: PropTypes.func,
};
RenderSearchList.propTypes = {
  data: PropTypes.array,
  searchFor: PropTypes.string,
};
RenderSearchFormInputs.propTypes = {
  list: PropTypes.array,
  params: PropTypes.object,
  placeholder: PropTypes.string,
  search: PropTypes.string,
  setList: PropTypes.func,
  setSearch: PropTypes.func,
};

export default SearchScreen;
