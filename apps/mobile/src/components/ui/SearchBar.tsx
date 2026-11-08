import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, typography } from '../../theme';

interface SearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  onFilterPress?: () => void;
  editable?: boolean;
  onPress?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search destinations...',
  onFilterPress,
  editable = true,
  onPress,
}) => {
  const content = (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color={colors.textSecondary} style={styles.searchIcon} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        editable={editable}
      />
      {onFilterPress && (
        <TouchableOpacity activeOpacity={0.7} onPress={onFilterPress} style={styles.filterButton}>
          <Ionicons name="options-outline" size={18} color={colors.textSecondary} />
        </TouchableOpacity>
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F4F2',
    borderRadius: radii.pill,
    paddingHorizontal: spacing.lg,
    height: 48,
    marginVertical: spacing.sm,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.md,
    color: colors.textPrimary,
    fontWeight: '400',
    paddingVertical: 0,
  },
  filterButton: {
    padding: spacing.xs,
  },
});

