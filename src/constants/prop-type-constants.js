import PropTypes from 'prop-types';

export const filterOptions = {
  practiceOptions: PropTypes.array,
  testOptions: PropTypes.array,
  categoryOptions: PropTypes.array,
  testSectionOptions: PropTypes.array,
  subCategoryOptions: PropTypes.array
};

export const authProps = {
  userActivation: PropTypes.string,
  isProfileChange: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([null]),
  ]),
  disableButton: PropTypes.bool,
  isLoading: PropTypes.bool
};