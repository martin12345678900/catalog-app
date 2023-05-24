import React from 'react'
import { TextInput } from 'react-native'
import { primary } from '@constants/theme/colors'
import styles from './styles'

interface ISearchBarProps {
  value: string
  onChange: (value: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange }) => (
  <TextInput
    accessibilityRole='search'
    placeholder='Search by name or catalog'
    value={value}
    style={styles.container}
    placeholderTextColor={primary}
    onChangeText={onChange}
  />
)

export default SearchBar
